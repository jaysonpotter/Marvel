Marvel.View.Index = Backbone.View.extend({
    template: Marvel.Templates.index,

    events: {
        'click': function () {
            this.placeholderMethod();
        }
    },

    initialize: function () {
        this.childViews = [];

        this.listenTo(this.collection, 'add', this.renderAdditionalCharacters);
    },

    placeholderMethod: function () {},

    render: function () {
        var searchInput = new Marvel.View.SearchInput();

        this.$el.append(this.template()); // technically not a child view, so it doesn't need to be added to the childViews array
        this.$el.append(searchInput.render().el);

        if (this.collection.length === 0) {
            this.collection.fetchCharactersSearchResults({name: this.name});
        } else {

            // if collection exists then render what's there.
            this.collection.each(function (model) {
                var characterView = new Marvel.View.Character({model: model});

                this.$el.append(characterView.render().el);

                this.childViews.push(characterView);

            }, this);

        }

        this.childViews.push(searchInput);
    },

    renderAdditionalCharacters: function (model) {
        var characterView = new Marvel.View.Character({model: model});

        this.$el.append(characterView.render().el);

        this.childViews.push(characterView);
    },

    onClose: function () {
    }
});