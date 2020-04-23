var app = app || {};
var templateName = '';
(function() {
    'use strict';
    //views linitalize
    var views = app.view = app.view || {};
    views.Application = Backbone.View.extend({
        initialize: function() {
           this.$content = this.$('#main');
        },
        setContent: function() {
           var paramCount = arguments;
           switch (paramCount.length) {
             case 2:
               var content = this.content;
               var pageSelect = this.target;

               if (content) content.remove();

               content = this.content = paramCount[0];
               pageSelect = this.target = paramCount[1];

               var templateName = pageSelect;
               var tmpl_dir = '../www/assets/static';
               var tmpl_url = tmpl_dir + '/' + templateName + '.html';
               var tmpl_string = '';

               $.ajax({
                   url: tmpl_url,
                   method: 'GET',
                   async: false,
                   dataType : 'html',
                   success: function (data) {
                       tmpl_string = data;
                   }
               });
               console.log('Name :'+ templateName + ' tmpl_dir :' + tmpl_dir + ' tmpl_url :' +tmpl_url);
               this.$content.html(content.render(tmpl_string).el);
             break;
             case 3:
               content = this.content;
               pageSelect = this.target;
               var subUrl = this.url;

               if (content) content.remove();

               content = this.content = paramCount[0];
               pageSelect  = this.target = paramCount[1];
               subUrl = this.url = paramCount[2];

               templateName = subUrl;
               tmpl_dir = '../www/assets/static';
               tmpl_url = tmpl_dir + '/' + templateName + '.html';
               tmpl_string = '';

               $.ajax({
                   url: tmpl_url,
                   method: 'GET',
                   async: false,
                   dataType : 'html',
                   success: function (data) {
                       tmpl_string = data;
                   }
               });
               console.log('Name :'+ templateName + ' tmpl_dir :' + tmpl_dir + ' tmpl_url :' +tmpl_url);
               this.$content.html(content.render(tmpl_string).el);
             break;
           }//switch ~ case end.
        },
        showSpinner: function(time){
            $('.loading').show(0).delay(time).hide(0);
        },
        resetSoundManager: function(){
            soundManager.reboot();
        }
    });
    views.Home = Backbone.View.extend({
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template);
        return this;
      }
    });
    views.Situation = Backbone.View.extend({
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template);
        return this;
      }
    });
    views.list = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template({result : this.collection.models}));
        return this;
      }
    });
    views.Culture = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template({categories: this.model.category}));
        return this;
      }
    });
    views.Livingword = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template({categories: this.model.category}));
        return this;
      }
    });
    views.Picword = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template({categories: this.model.category}));
        return this;
      }
    });
    views.Count = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        var template = _.template(templateName);
        this.$el.html(template({categories: this.model.category}));
        return this;
      }
    });
    views.Test = Backbone.View.extend({
      template: _.template(templateName),
      render: function(templateName) {
        this.template = _.template(templateName);
        this.$el.html(this.template({content : this.model.content}));
        return this;
      }
    });
    views.Adjective = Backbone.View.extend({
          template: _.template(templateName),
          render: function(templateName) {
            var template = _.template(templateName);
            this.$el.html(template({categories: this.model.category}));
            return this;
          }
    });
})();
