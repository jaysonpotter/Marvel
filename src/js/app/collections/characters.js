;(function () {
  'use strict';

  // Characters Collection
  // ----------------
  MarvelApp.Collections.Characters = Backbone.Collection.extend({

    model: MarvelApp.Models.Character

  });
}());