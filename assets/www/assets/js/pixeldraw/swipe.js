/**
 slick.js 기반 스와이프 javascript
 '17 01. 31
 액티브 탭 클릭 시 그 탭이 3개 나열되어있을때 처음 탭이 그 row의 첫번째로 선택하는 경향이 있음.
 1, 2, 3, 4 탭이 있으면
*/
var boardset=0;
$(function () {
'use strict';
// global val
  var $swipeTabsContainer = $('.swipe-tabs'),
      $swipeTabs = $('.swipe-tab'),
      $nextBt=$('#nextbt'),
      $swipeTabsContentContainer = $('.swipe-tabs-container'),
      $backBtn = $('.back_btn'),
      $priviousBtn = $('.privious_btn'),
      currentIndex = 0,
      priviousIndex = 0,
      activeTabClassName = 'active-tab';

      //global val
      boardset=0;

    $swipeTabsContainer.on('init', function(event, slick) {
    $swipeTabsContentContainer.removeClass('invisible');
    $swipeTabsContainer.removeClass('invisible');

    currentIndex = slick.getCurrent();
    $swipeTabs.removeClass(activeTabClassName);
    $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
  });

$swipeTabsContainer.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  swipeToSlide: true,
  touchThreshold: 10
});

$swipeTabsContentContainer.slick({
  asNavFor: $swipeTabsContainer,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  swipeToSlide: true,
  draggable: false,
  touchThreshold: 10
});

var slideNswipe = function(currentIndex){
  $swipeTabs.removeClass(activeTabClassName);
  $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
  $swipeTabsContainer.slick('slickGoTo', currentIndex);
  $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
  boardset=currentIndex;
}
//go tab
$swipeTabs.on('click', function(event) {
  currentIndex = $(this).data('slick-index');
  slideNswipe(currentIndex);
  console.log("tab");
});
//go next
$nextBt.on('click', function(event) {
  slideNswipe(boardset+1);
  console.log("tab next");
});
//go ahead
$priviousBtn.on('click', function(event){
  priviousIndex = $(this).attr('id');
  currentIndex = priviousIndex;
  slideNswipe(currentIndex);
});
//go first
$backBtn.on('click', function(event){
  currentIndex = 0;
  slideNswipe(currentIndex);
});

  //initializes slick navigation tabs swipe handler
  $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
    currentIndex = $(this).slick('slickCurrentSlide');
  $swipeTabs.removeClass(activeTabClassName);
  $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
  boardset=currentIndex;
  });
});
