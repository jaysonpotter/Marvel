Marvel.View.Index = Backbone.View.extend({
	el: '#Content',
	template : Marvel.Templates.index,
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	}
});