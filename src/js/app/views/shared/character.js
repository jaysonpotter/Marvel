Marvel.View.Character = Backbone.View.extend({
    template: Marvel.Templates.character,

    events: {
        'click .test': function (evt) {
            evt.preventDefault();

            this.updateHistory(evt);
        }
    },

    initialize: function () {
    },

    updateHistory: function (evt) {
        evt.preventDefault();

        var $el = $(evt.target),
                url = $el.attr('href');

        if (typeof url !== 'undefined' && !url.match(/\/\//) && !url.match(/mailto/ig)) {
            marvel.router.navigate(url, {trigger: true});
        }

    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
