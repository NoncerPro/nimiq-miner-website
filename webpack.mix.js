let mix = require('laravel-mix');

mix.webpackConfig({  
    module: {
        rules: [{
            test: /\.svg$/,
            use: [{ loader: 'html-loader' }]
        }]
    }
});

mix
    .js('./src/main.js','./dist/app.js')
    .sass('./src/main.sass','./dist/app.css')
    .copy('./src/index.html','./dist/index.html')
    .copyDirectory('./src/img', './dist/img')
    .options({
        processCssUrls: false,
        uglify: true,
    });