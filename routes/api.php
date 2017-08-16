<?php

use Illuminate\Http\Request;
use GuzzleHttp\Client;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->post('/sendemail', function (Request $request) {
    $bodyContent = $request->getContent();
    $valueArray = explode(':::', $bodyContent);

    $name = $valueArray[0];
    $email = $valueArray[1];
    $resume = $valueArray[2];

    $everything = [
        'name' => $name,
        'email' => $email
    ];

    try {
        if ($resume == 'true') {
            Mail::send('emailattach', $everything,
                function($message) use ($email, $name){
                    $message->to($email, $name)
                        ->subject('Hope to hear from you soon!')
                        ->attach('../public/images/thing.pdf', ['as' => 'fyau_resume.pdf']);
                }
            );
        }
        else {
            Mail::send('email', $everything,
                function($message) use ($email, $name){
                    $message->to($email, $name)
                        ->subject('Hope to hear from you soon!');
                }
            );
        }
        return 'sent!';
    }
    catch(\Exception $e){
        return $e->getMessage();
    }
});

Route::middleware('api')->post('/checkrecaptcha', function (Request $request) {
    $bodyContent = $request->getContent();
    $client = new Client();

    $response = $client->post(
        'https://www.google.com/recaptcha/api/siteverify',
        ['form_params'=>
            [
                'secret'=>env('RECAPTCHA_SECRET_KEY'),
                'response'=>$bodyContent
            ]
        ]
    );

    $body = json_decode((string)$response->getBody());
    return response()->json($body->success);
});