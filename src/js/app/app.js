$(function () {
  'use strict';

  app.collection = new MarvelApp.Collections.Characters();

  app.characterView = new MarvelApp.Views.Character({
    collection: app.collection
  });

  app.router = new MarvelApp.Routers.Router();

  app.collection.once("reset", function () {
    Backbone.history.start();
  });

  app.collection.fetch({ reset: true });

});