$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(".slider").slick('refresh');
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.slider-for').on(`init reInit`, function(event, slick) {
  $('.counter').text(1 + ' из ' + slick.slideCount);
});
$('.slider-for').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' из ' + slick.slideCount);
});

$('.slider-for-2').on(`init reInit`, function(event, slick) {
  $('.counter').text(1 + ' из ' + slick.slideCount);
});
$('.slider-for-2').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' из ' + slick.slideCount);
});

$(".dtp_left").on("click", function(){
  $(".slider-for .slick-prev").click();
});

$(".dtp_right").on("click", function(){
  $(".slider-for .slick-next").click();
});

$(".zona_left").on("click", function(){
  $(".slider-for-2 .slick-prev").click();
});

$(".zona_right").on("click", function(){
  $(".slider-for-2 .slick-next").click();
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  fade: true,
  speed: 600,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '90px',
});

$('.slider-for-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  fade: true,
  speed: 600,
  asNavFor: '.slider-nav-2'
});

$('.slider-nav-2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for-2',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '90px',
});
