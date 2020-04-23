var app = app || {};
(function () {
	'use strict';
	var collections = app.Collection = app.Collection || {};

	collections.Livingwords =  Backbone.Collection.extend({model: app.Model.Livingword});
	collections.VideoLists =  Backbone.Collection.extend({model: app.Model.Video});
	collections.Cultures =  Backbone.Collection.extend({model: app.Model.Culture});

	app.Collection.Livingword =  collections.Livingword;
	app.Collection.VideoList = collections.VideoLists;
	app.Collection.CultureList = collections.CultureLists;
})();
