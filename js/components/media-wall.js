define(['jquery', 'config'], function ($, config) {

    var MediaWall = function (componentId) {
        console.log("Constructing media wall #" + componentId);
        console.log(config);
        $('#' + componentId).addClass('component--enhanced');
    };

    return MediaWall;
});