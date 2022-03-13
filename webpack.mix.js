let mix = require("laravel-mix");

mix.sass("scss/index.scss", "css/style.css").options({
    processCssUrls: false,
});

mix.disableSuccessNotifications();
