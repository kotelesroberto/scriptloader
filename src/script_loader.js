/**
 * Robert Koteles, Senior Web Developer, 2020
 */

// ==========================================================================
// GENERAL SCRIPT LOADER
// ==========================================================================
var Loader = function(){}
Loader.prototype = {
    require: function (scripts, callback) {
        this.loadCount      = 0;
        this.totalRequired  = scripts.length;
        this.callback       = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;
        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
        var self = this;
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}



var l = new Loader();
l.require(
    [
    "https://polyfill.io/v3/polyfill.min.js?flags=gated&amp;features=es6", 
    "https://code.jquery.com/jquery-3.5.1.min.js"
    ], 
function() {
    log('All Scripts Loaded');
});