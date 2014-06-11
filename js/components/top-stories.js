define(['jquery'], function ($) {

    var TopStories = function (componentId) {
        console.log("Constructing top stories #" + componentId);
        $('#' + componentId).addClass('component--enhanced');
    };

    return TopStories;
});