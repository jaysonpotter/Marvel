Marvel.View.Search = Backbone.View.extend({
    initialize: function (options) {
        this.childViews = [];

        this.listenTo(this.collection, 'add', this.renderAdditionalCharacters);

        this.name = options.name;

        if (this.collection.length === 0) {
            this.collection.fetchCharactersSearchResults({name: this.name});
        }

    },

    render: function () {
        //var showMoreCharacters = new Marvel.View.ShowMoreCharacters();

        //this.childViews.push(showMoreCharacters);

        // if collection exists then render what's there.
        this.collection.each(function (model) {
            var characterView = new Marvel.View.Character({model: model});

            this.$el.append(characterView.render().el);

            this.childViews.push(characterView);

        }, this);

        //this.$el.append(showMoreCharacters.render().el);

    },

    renderAdditionalCharacters: function (newModel) {
        var characterView = new Marvel.View.Character({model: newModel});

        this.$el.append(characterView.render().el);

        this.childViews.push(characterView);
    },

    onClose: function () {
    }
});