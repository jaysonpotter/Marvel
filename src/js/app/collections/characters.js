Marvel.Collection.Characters = Backbone.Collection.extend({

    model: Marvel.Model.Character,

    url: 'http://gateway.marvel.com:80/v1/public/characters',
    publicAPIKey: 'bea22e84deda871e47704c00d29cb43e',

    // parse allows us to get into the nested data returned from
    // the API when fetching new data via fetch()
    parse: function (data) {
        return data.results;
    },

    initialize: function (model) {
        console.log('character model', model);
    },

    fetchCharactersSearchResults: function (options) {
        var options = options || {};

        this.fetch({
            remove: false,
            traditional: true,
            data: {
                name  : options.name || '',
                offset: options.offset || 0,
                limit : 10,
                apikey: this.publicAPIKey
            }
        });

    }

});