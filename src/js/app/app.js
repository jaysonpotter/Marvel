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
    				root: '/Marvel/dist/',
					pushState: true
				});
			}
			catch (e) {
				console.log("History is blabbing about ", e);
			}
			
			// This allows for {{ value }} syntax in the 
			// underscore templates vs <%= value %>
            _.templateSettings = {
                evaluate: /\{\{(.+?)\}\}/g,
                interpolate: /\{\{\=(.+?)\}\}/g,
                escape: /\{\{\-(.+?)\}\}/g
            };
			
		},

		doSomethingBeforeReady: function (callback) {
			var url = 'http://gateway.marvel.com:80/v1/public/characters/1009313?apikey=bea22e84deda871e47704c00d29cb43e',
			    setOfTen = 'http://gateway.marvel.com:80/v1/public/characters/1009313/comics?limit=10&apikey=bea22e84deda871e47704c00d29cb43e',
				that = this;

			$.getJSON(setOfTen, {})
				.done(function (res) {
    				console.log("the Marvel Response", res);
					marvel.content = new Marvel.Model.Character(res.data);
					marvel.test = new Marvel.Collection.Characters(res.data.results);
					that.ready();
				})
				.fail(function (res, status) {
					console.log(res, status);
				});

		}
	});
};