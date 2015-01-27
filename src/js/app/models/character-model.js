(function () {
    'use strict';
    
    // Character Model
    // ----------
    MarvelApp.Models.Character = Backbone.Model.extend({
        defaults: function () {
            return {
                name: '',
                description: '',
                thumbnail: {
                    path: '',
                    extension: 'jpg'
                },
                comics: {
                    available: 0,
                    collectionURI: "",
                    items: []
                }
            };
        }
    });
}());