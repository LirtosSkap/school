<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width-device-width, initial-scale=1">
    <link rel="icon" href="">
    @yield('meta')
    <title>@yield('title', 'Radio-station')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&key=AIzaSyCG2NFV_4jC0HRU8u-uzVqBSbP7lDVJE7A"></script>
    @include('web.layouts.assets.header')
</head>
<header>
    @include('web.layouts.components.header')
</header>
<body>
<div class="sgl-wrapper">
    @yield('content')
    @include('web.layouts.assets.footer')
</div>
</body>
</html>