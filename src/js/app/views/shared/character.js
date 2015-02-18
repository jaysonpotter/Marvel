Marvel.View.Character = Backbone.View.extend({
    template: Marvel.Templates.character,

    events: {},

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
