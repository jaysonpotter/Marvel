;(function(win, $){
    
    var MarvelApp = new Backbone.Marionette.Application();
    
    MarvelApp.on('start', function(options){
        Backbone.history.start();
    });
    
    MarvelApp.start();
    
}(window, jQuery));