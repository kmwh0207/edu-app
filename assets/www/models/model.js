var app = app || {};
(function() {
	'use strict';
	var models = app.Model = app.Model || {};

	models.Livingword = Backbone.Model.extend({
		parse: function(response){
			 for(var key in this.model)
			 {
					 var embeddedClass = this.model[key];
					 var embeddedData = response[key];
					 response[key] = new embeddedClass(embeddedData, {parse:true});
			 }
			 return response;
	 }
	});
	models.Video = Backbone.Model.extend({});
	models.Culture = Backbone.Model.extend({});


	app.Model.Livingword = models.Livingword;
  app.Model.Video = models.Video;
	app.Model.Culture = models.Culture;
})();
