Marvel.App.Mvl = function () {
	return _.extend({
		docRoot  : null,
		docOrigin: null,
		router   : null,
		content  : {},

		initialize: function () {
			this.docRoot = document.location.href;
			this.docOrigin = document.location.origin;

			this.doSomethingBeforeReady();
		},

		ready: function () {
			this.router = new Marvel.Router({
				app: this
			});

			try {
				Backbone.history.start({
    				root: '/Marvel/',
					pushState: true
				});
			}
			catch (e) {
				console.log("History is blabbing about ", e);
			}

		},

		doSomethingBeforeReady: function () {
			var url = 'http://gateway.marvel.com:80/v1/public/characters/1009313?apikey=bea22e84deda871e47704c00d29cb43e',
				that = this;

			$.getJSON(url, {})
				.done(function (res) {
					marvel.content.example = new Marvel.Model.Character(res.data.results[0]);
					that.ready();
				})
				.fail(function (res, status) {
					console.log(res, status);
				});
		}
	});
};