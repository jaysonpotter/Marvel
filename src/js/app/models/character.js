Marvel.Model.Character = Backbone.Model.extend({
    initialize: function () {
        var thumbnail = this.get('thumbnail');

        if (!thumbnail) {
            this.set('thumbnail', {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                extension: "jpg"
            });
        }
    }
});