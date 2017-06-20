const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var glob = require ('glob')

mix.scripts(glob.sync('resources/assets/web/js/*.js'), 'public/web/js/combine.js')
    .sass('resources/assets/web/sass/styles.scss','public/web/css/combine.css')
    .styles(glob.sync('resources/assets/web/css/*.css'), 'public/web/css/assets.css')

/*
 mix.js('resources/assets/js/app.js', 'public/js')
 .sass('resources/assets/sass/app.scss', 'public/css');
 */