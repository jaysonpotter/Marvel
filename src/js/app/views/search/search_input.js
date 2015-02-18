Marvel.View.SearchInput = Backbone.View.extend({
    template: Marvel.Templates.search_input,

    events: {
        'click input': function () {
            this.workit();
        }
    },

    initialize: function () {
    },

    workit: function () {
        console.log('events from the parent template search input');
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    onClose: function () {
    }
});