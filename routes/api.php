<?php

use Illuminate\Http\Request;

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

    if ($resume == 'true') {
        Mail::send('emailattach', $name,
            function($message) use ($email){
                $message->to($email, $name);
                $message->subject('Hope to hear from you soon!');
                $message->attach('/images/profile.png');
            }
        );
    }
    else {
        Mail::send('email', $name,
            function($message) use ($email){
                $message->to($email, $name);
                $message->subject('Hope to hear from you soon!');
            }
        );
    }
    return 'sent!';
});