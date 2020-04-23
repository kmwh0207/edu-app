'use strict'
  function initSlider(){
    $('.single-items').slick({
      arrows : false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: false
    });
  }

  function initMainGrid(){
    $('.grid').masonry({
      itemSelector: '.grid-main-item',
      columnWidth: '.grid-main-sizer',
      gutter: 15,
      percentPosition: true,
    });
  }

  function initGrid(){
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 5,
      percentPosition: true,
    });
  }

var defaultModal = $('.open');
var cultureModal = $('.open_culture');
var movieModal = $('.open_movie');

defaultModal.click(function(e){
    var titleId = $(this).attr('id');
    var titleContent = $(this).find('.title').text();

    var modalViewSelect = titleId;
    var tmpl_dir = '../www/assets/static/modalview';
    var tmpl_url = tmpl_dir + '/' + modalViewSelect + '.html';

    $.ajax({
        url: tmpl_url,
        method: 'GET',
        async: false,
        dataType : 'html',
        success: function (data) {
              $("#title").html(titleContent);
              $("#content").html(data);
              $("#defaultModal").modal('show');
          }
    });
  });

cultureModal.click(function(e){
  var titleId = $(this).attr('id');
  var titleContent = $(this).find('.title').text();

  var modalViewSelect = titleId;
  var tmpl_dir = '../www/assets/static/modalview';
  var tmpl_url = tmpl_dir + '/culture/' + modalViewSelect + '.html';

  $.ajax({
      url: tmpl_url,
      method: 'GET',
      async: false,
      dataType : 'html',
      success: function (data) {
            $("#longModalTitle").html(titleContent);
            $("#longModalContent").html(data);
            $('p').css({"text-align":"left", "word-break":"keep-all"});
            $("#longModal").modal('show');
        }
  });
});

movieModal.click(function(e){
    var titleId = $(this).attr('id');
    var titleContent = '영상자료';

    var modalViewSelect = titleId;
    var tmpl_dir = '../www/assets/static/modalview';
    var tmpl_url = tmpl_dir + '/main/' + modalViewSelect + '.html';

    $.ajax({
        url: tmpl_url,
        method: 'GET',
        async: false,
        dataType : 'html',
        success: function (data) {
              $("#movietitle").html(titleContent);
              $("#moviecontent").html(data);
              $('video').css({"width":"100%", "height":"auto"});
              $("#movieModal").modal('show');
          }
    });

    $('#movieModal').blur(function() {
      $('video')[0].pause();
    });
  });

  function boardModal(e){
      var titleId = e;
      var titleContent = '스고로쿠 지식판';

      var modalViewSelect = titleId;
      var tmpl_dir = '../www/assets/static/modalview';
      var tmpl_url = tmpl_dir + '/board/' + "board_exp" + '.html';

      $.ajax({
          url: tmpl_url,
          method: 'GET',
          async: false,
          dataType : 'html',
          success: function (data) {
                $("#movietitle").html(titleContent);
                $("#moviecontent").html(data);
                $("#movieModal").modal('show');
            }
      });
   }

// var isClickCircle = $('.circle');
//
//   isClickCircle.click(function(){
//     var id = $(this).attr('id');
//     var circleId  = $('#circle'+id);
//     console.log(circleId);
//
//       $('#circle'+id).css('background-color', 'white');
//       $('#blindword'+id).css('display', 'none');
//       $('#word_test'+id).css('display', 'block');
// });

  $(".waves-effect").click(function(){
    var getTestStatement = $(this).find('.testWord');
    var getAnswerStatement = $(this).find('.answerSection');

    if ($(this).find('.testWord').is(':visible')) {
      $(this).toggleClass("highlight");
      $(this).removeClass("green");
      $(this).addClass("light-green");
      $(getTestStatement).css('display', 'none');
      $(getAnswerStatement).css('display', 'block');
    } else {
      $(this).toggleClass("highlight");
      $(this).removeClass("light-green");
      $(this).addClass("green");
      $(getTestStatement).css('display', 'block');
      $(getAnswerStatement).css('display', 'none');
    }
 });

$(".waves-effect_blue").click(function(){
    var getTestStatement = $(this).find('.testWord');
    var getAnswerStatement = $(this).find('.answerSection');

    if ($(this).find('.testWord').is(':visible')) {
      $(this).toggleClass("highlight");
      $(this).removeClass("green");
      $(this).addClass("light-blue");
      $(getTestStatement).css('display', 'none');
      $(getAnswerStatement).css('display', 'block');
    } else {
      $(this).toggleClass("highlight");
      $(this).removeClass("light-blue");
      $(this).addClass("green");
      $(getTestStatement).css('display', 'block');
      $(getAnswerStatement).css('display', 'none');
    }
 });