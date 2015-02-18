Marvel.Router = Backbone.Router.extend({
    _current: null,

    app: undefined,

    initialize: function (config) {
        this.app = config.app;
    },

    routes: {
        '': 'index',
        'search': 'search',
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
        var searchQuery = 'search_' + name,
            nameSearchResultsView;

        if (this._current !== searchQuery) {

            if (!marvel.content[searchQuery]) {
                marvel.content[searchQuery] = new Marvel.Collection.Characters();
            }

            nameSearchResultsView = new Marvel.View.Search({
                collection: marvel.content[searchQuery],
                name: name || 'gambit'
            });

            marvel.showView(nameSearchResultsView);

            this._current = searchQuery;
        }
    }
});