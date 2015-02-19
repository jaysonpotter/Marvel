Marvel.View.Search = Backbone.View.extend({

    template: Marvel.Templates.search,

    events: {
        'click': function () {
            this.placeholderMethod();
        }
    },

    initialize: function (options) {
        this.childViews = [];

        this.listenTo(this.collection, 'add', this.renderAdditionalCharacters);

        this.name = options.name;

        if (this.collection.length === 0) {
            this.collection.fetchCharactersSearchResults({name: this.name});
        }

    },

    placeholderMethod: function () {
        console.log('events from the backbone search view');
    },

    render: function () {
        var searchInput = new Marvel.View.SearchInput();

        this.childViews.push(searchInput);

        this.$el.append(this.template());
        this.$el.append(searchInput.render().el);

        console.log('this collection should be empty upon first time search', this.collection);

        // if collection exists then render what's there.
        this.collection.each(function (model) {
            var characterView = new Marvel.View.Character({model: model});

            this.$el.append(characterView.render().el);

            this.childViews.push(characterView);

            console.log('rendered a search result');

        }, this);
    },

    renderAdditionalCharacters: function (newModel) {
        var characterView = new Marvel.View.Character({model: newModel});

        this.$el.append(characterView.render().el);

        console.log('rendered a search result, but should not have');

        this.childViews.push(characterView);
    },

    onClose: function () {
    }
});