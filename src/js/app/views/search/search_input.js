Marvel.View.SearchInput = Backbone.View.extend({
    template: Marvel.Templates.search_input,

    events: {
        'submit #SearchStartsWith': function (evt) {
            evt.preventDefault();
            this.routeToResults(evt);
        }
    },

    initialize: function () {
    },

    routeToResults: function (evt) {
        var searchQuery = $(evt.target).find('#SearchInput').val(),
            queryURL = '/search/' + searchQuery;

        marvel.router.navigate(queryURL, {trigger: true});

    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    onClose: function () {
    }
});