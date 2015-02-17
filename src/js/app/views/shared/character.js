Marvel.View.Character = Backbone.View.extend({
    template: Marvel.Templates.character,

    events: {
        'click .test': function (evt) {
            evt.preventDefault();

            this.updateHistory(evt);
        }
    },

    initialize: function () {
        console.log('character view');
    },

    updateHistory: function (evt) {

        evt.preventDefault();

        console.log('test');

        var $el = $(evt.target),
                url = $el.attr('href');

        console.log('this should have triggered a change in route');

        if (typeof url != 'undefined' && !url.match(/\/\//) && !url.match(/mailto/ig)) {


            marvel.router.navigate(url, {trigger: true});
        }

    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
