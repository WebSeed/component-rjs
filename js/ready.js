define('ready', ['jquery'], function ($) {
    // Loader plugin API: http://requirejs.org/docs/plugins.html#api
    return {
        domReady: false,
        pageReady: false,
        onload: null,
        load: function (name, req, onload, config) {
            var self = this;
            this.onload = onload;
            $(function () {
                self.domReady = true;
                self.loadIfReady();
            });
        },
        go: function () {
            this.pageReady = true;
            this.loadIfReady();
        },
        loadIfReady: function () {
            if (this.domReady && this.pageReady)
                this.onload();
        }
    };
});