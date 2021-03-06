Marvel.App.Mvl = function () {
    return _.extend({
        docRoot: null,
        docOrigin: null,
        router: null,

        content: {},

        currentView: null,

        initialize: function () {
            this.docRoot = document.location.href;
            this.docOrigin = document.location.origin;

            this.fetchDataBeforeReady();
        },

        ready: function () {
            this.router = new Marvel.Router({
                app: this
            });

            try {
                Backbone.history.start({
                    root: '/',
                    pushState: true
                });
            }
            catch (e) {
                console.log("History is blabbing about ", e);
            }

        },

        fetchDataBeforeReady: function () {
            var url = 'http://gateway.marvel.com:80/v1/public/characters/1009313?apikey=bea22e84deda871e47704c00d29cb43e',
                that = this;

            $.getJSON(url, {})
                .done(function (res) {
                    marvel.content.example = new Marvel.Collection.Characters(res.data.results[0]);
                    that.ready();
                })
                .fail(function (res, status) {
                    console.log(res, status);
                });
        },

        showView: function (view) {
            var previousView = this.currentView || null,
                nextView = view,
                self = this;

            if (previousView) {

                previousView.transitionOut(function(){
                    previousView.close();

                    nextView.render();

                    $("#Content").append(nextView.$el);

                    nextView.transitionIn();

                    self.currentView = nextView;
                });

            } else {
                nextView.render();

                $("#Content").append(nextView.$el);

                nextView.transitionIn();

                this.currentView = nextView;
            }

        }
    });
};