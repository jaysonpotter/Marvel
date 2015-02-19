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

Backbone.View.prototype.transitionIn = function (callback) {
    $('#Content').addClass('is-visible');

    $('#Content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        if (_.isFunction(callback)) {
            callback();
        }
    });
};

Backbone.View.prototype.transitionOut = function (callback) {
    $('#Content').removeClass('is-visible');

    $('#Content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        if (_.isFunction(callback)) {
            callback();
        }
    });
};