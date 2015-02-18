Marvel.View.Index = Backbone.View.extend({
    initialize: function () {
        this.childViews = [];

        this.listenTo(this.collection, 'add', this.renderAdditionalCharacters);
    },

    render: function () {

        this.collection.each(function (model) {

            var characterView = new Marvel.View.Character({model: model});

            this.$el.append(characterView.render().el);

            this.childViews.push(characterView);

        }, this);

    },

    renderAdditionalCharacters: function (model) {
        var characterView = new Marvel.View.Character({model: model});

        this.$el.append(characterView.render().el);

        this.childViews.push(characterView);
    },

    onClose: function () {}
});