define(['jquery'], function ($) {
    var page = {
        init: function () {
            console.log('Page init()');
            $('li').addClass('page-meddling');
        }
    };
    return page;
});