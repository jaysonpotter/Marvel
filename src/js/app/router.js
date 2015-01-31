Marvel.Router = Backbone.Router.extend({
	_current: null,
	app     : undefined,

	initialize: function (config) {
		this.app = config.app;
	},

	routes: {
		'' : 'index'
	},

	root: function () {
    	console.log("this is groot");
	},

	index: function () {
		// this checks the current route so it doesn't trigger a rerender
		// although if we poll for articles, we just might need to
		// to show results for filters and searches
		if(this._current !== 'index') {
			var indexPageView = new Marvel.View.IndexPage({
				collection: marvel.content
			});

			indexPageView.render();

			this._current = 'index';
			$('#Content').show();
		}

	}
});