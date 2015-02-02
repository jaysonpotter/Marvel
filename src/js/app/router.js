Marvel.Router = Backbone.Router.extend({
	_current: null,

	initialize: function () {},

	routes: {
		'' : 'index',
		'search': 'search'
	},

	root: function () {
    	console.log("this is groot");
	},

	index: function () {
		// this checks the current route so it doesn't trigger a rerender
		// although if we poll for articles, we just might need to
		// to show results for filters and searches
		if(this._current !== 'index') {
			var indexPageView = new Marvel.View.Index({model:marvel.content.example});

			indexPageView.render();

			this._current = 'index';
		}

	},

	search: function(){
		if(this._current !== 'search') {
			var searchPage = new Marvel.View.Search({

			});
		}
	}
});