Marvel.Collection.Characters = Backbone.Collection.extend({

    model: Marvel.Model.Character,

    url: 'http://gateway.marvel.com:80/v1/public/characters',
    publicAPIKey: 'bea22e84deda871e47704c00d29cb43e',

    // parse allows us to get into the nested data returned from
    // the API when fetching new data via fetch()
    parse: function (res) {
        return res.data.results;
    },

    initialize: function () {
    },

    fetchCharactersSearchResults: function (options) {

        this.fetch({
            remove: false,
            traditional: true,
            data: {
                nameStartsWith  : options.name || '',
                offset: options.offset || 0,
                limit : 10,
                apikey: this.publicAPIKey
            }
        });

    }

});