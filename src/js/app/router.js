Marvel.Router = Backbone.Router.extend({
    _current: null,

    app: undefined,

    initialize: function (config) {
        this.app = config.app;
    },

    routes: {
        '': 'index',
        'search/:name': 'search'
    },

    root: function () {
        console.log("this is groot");
    },

    index: function () {
        // this checks the current route so it doesn't trigger a rerender
        // although if we poll for articles, we just might need to
        // to show results for filters and searches
        if (this._current !== 'index') {
            var indexPageView = new Marvel.View.Index({collection: marvel.content.example});

            marvel.showView(indexPageView);

            this._current = 'index';
        }

    },

    search: function (name) {
        var searchTerm = ('search_term_' + name);

        if (this._current !== searchTerm) {

            var resultsName = 'results_for_' + name;

            if (!marvel.content[resultsName]) {
                marvel.content[resultsName] = new Marvel.Collection.Characters();
            }

            var nameSearchResultsView = new Marvel.View.Search({
                collection: marvel.content[resultsName],
                name: name
            });

            marvel.showView(nameSearchResultsView);

            this._current = searchTerm;
        }


    }
});