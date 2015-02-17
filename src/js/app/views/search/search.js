Marvel.View.Search = Backbone.View.extend({
    initialize: function () {
        this.childViews = [];

        this.listenTo(this.collection, 'add', this.renderAdditionalCharacters);
    },

    render: function () {
        //var showMoreCharacters = new Marvel.View.ShowMoreCharacters();

        //this.childViews.push(showMoreCharacters);

        this.collection.each(function (model) {

            var characterView = new Marvel.View.Character({model: model});

            this.$el.append(characterView.render().el);

            this.childViews.push(characterView);

        }, this);

        //this.$el.append(showMoreCharacters.render().el);

    },

    renderAdditionalCharacters: function (newModel) {
        var characterView = new Marvel.View.Character({model: model});

        this.$el.append(characterView.render().el);

        this.childViews.push(characterView);
    },

    onClose: function () {}
});