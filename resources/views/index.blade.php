<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Felicia Yau</title>
    <link href="http://material-ui.com/css/main.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
  </head>

  <body>
    <div id="app"></div>
    <script src="/js/app.js"></script>
  </body>
</html>