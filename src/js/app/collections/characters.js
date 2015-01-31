Marvel.Collection.Characters = Backbone.Collection.extend({

    model: Marvel.Model.Character,
    
    initialize: function(){
        console.log('this is the collection talking, this is a ref to the character model.', this.model);
    }

});