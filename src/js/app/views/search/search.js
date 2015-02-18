Marvel.View.Search = Backbone.View.extend({

    template: Marvel.Templates.search,

    events: {
        'click .test': function () {
            this.workit();
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

    workit: function () {
        console.log('events from the backbone search view');
    },

    render: function () {
        var searchInput = new Marvel.View.SearchInput();

        this.childViews.push(searchInput);

        this.$el.append(this.template());

        // if collection exists then render what's there.
        this.collection.each(function (model) {
            var characterView = new Marvel.View.Character({model: model});

            this.$el.append(characterView.render().el);

            this.childViews.push(characterView);

        }, this);

        this.$el.append(searchInput.render().el);
    },

    renderAdditionalCharacters: function (newModel) {
        var characterView = new Marvel.View.Character({model: newModel});

        this.$el.append(characterView.render().el);

        this.childViews.push(characterView);
    },

    onClose: function () {
    }
});