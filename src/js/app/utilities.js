Backbone.View.prototype.close = function () {

    this.remove();
    this.unbind();

    if (this.onClose) {
        this.onClose();
    }

    if (this.childViews) {
        _.each(this.childViews, function (childView) {
            childView.close();
        });
    }

};