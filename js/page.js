define(['jquery'], function ($) {
    var page = {
        init: function () {
            console.log('Page init()');
            window.setTimeout(function () {
                $('li').addClass('page-meddling');
            }, 1000);
        }
    };
    return page;
});