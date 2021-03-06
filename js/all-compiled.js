
define('page',['jquery'], function ($) {
    var page = {
        init: function () {
            console.log('Page init()');
            $('li').addClass('page-meddling');
        }
    };
    return page;
});
define('components/media-wall',['jquery', 'config'], function ($, config) {

    var MediaWall = function (componentId) {
        console.log("Constructing media wall #" + componentId);
        console.log(config);
        $('#' + componentId).addClass('component--enhanced');
    };

    return MediaWall;
});
define('components/top-stories',['jquery'], function ($) {

    var TopStories = function (componentId) {
        console.log("Constructing top stories #" + componentId);
        $('#' + componentId).addClass('component--enhanced');
    };

    return TopStories;
});