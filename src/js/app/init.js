$(document).ready(function () {
    // instantiate the app
    marvel = new Marvel.App.Mvl();

    // initialize the app
    marvel.initialize();

    // Trigger popstate as a Backbone event
    window.onpopstate = function (event) {
        Backbone.trigger('popstate', event);
    };

    console.info('application, history, and popstate listener initialized');
});