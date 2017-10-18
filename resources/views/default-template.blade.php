<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width-device-width, initial-scale=1">
    <link rel="icon" href="">
    @yield('meta')
    <title>@yield('title', 'Radio-station')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&key=AIzaSyCG2NFV_4jC0HRU8u-uzVqBSbP7lDVJE7A"></script>
    <link rel='stylesheet' type='text/css' href={{asset('web/css/assets.css')}}>
    <link rel='stylesheet' type='text/css' href={{asset('web/css/combine.css')}}>
</head>
<header>
</header>
<body class="body">
    @yield('content')
    <script src="{{url('web/js/combine.js')}}"></script>
</body>
</html>