$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(".modal_dtp .slider").slick('refresh');
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.modal_dtp .slider-for').on(`init reInit`, function(event, slick) {
    $('.counter').text(1 + ' из ' + slick.slideCount);
});
$('.modal_dtp .slider-for').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1 + ' из ' + slick.slideCount);
});

$('.modal_dtp .slider-for-2').on(`init reInit`, function(event, slick) {
    $('.counter').text(1 + ' из ' + slick.slideCount);
});
$('.modal_dtp .slider-for-2').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1 + ' из ' + slick.slideCount);
});

$(".modal_dtp .dtp_left").on("click", function() {
    $(".slider-for .slick-prev").click();
});

$(".modal_dtp .dtp_right").on("click", function() {
    $(".slider-for .slick-next").click();
});

$(".modal_dtp .zona_left").on("click", function() {
    $(".slider-for-2 .slick-prev").click();
});

$(".modal_dtp .zona_right").on("click", function() {
    $(".slider-for-2 .slick-next").click();
});

$('.modal_dtp .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    speed: 600,
    asNavFor: '.slider-nav'
});

$('.modal_dtp .slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '90px',
});

$('.modal_dtp .slider-for-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    speed: 600,
    asNavFor: '.slider-nav-2'
});

$('.modal_dtp .slider-nav-2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for-2',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '90px',
});


$('.modal_complex .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    speed: 600,
    asNavFor: '.slider-nav'
});

$('.modal_complex .slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '90px',
});


$(".cart_watch").on("click", function(e) {
    e.preventDefault();
    $(".back_slider").show();
    $(".complex_basis_main").hide();
    $(".complex_slider_wrap").show();
    $(".modal_complex .slider").slick('refresh');
    $(".modal_complex .slider-for").on(`init reInit`, function(event, slick) {
        $('.counter').text(1 + ' из ' + slick.slideCount);
    });
    $(".modal_complex .slider-for").on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.counter').text(currentSlide + 1 + ' из ' + slick.slideCount);
    });
});

$(".back_slider").on("click", function() {
    $(".back_slider").hide();
    $(".complex_basis_main").show();
    $(".complex_slider_wrap").hide();
});

$(".modal_complex .slider_right").on("click", function() {
    $(".slider-for .slick-prev").click();
});

$(".modal_complex .slider_left").on("click", function() {
    $(".slider-for .slick-next").click();
});

$(".add_photo").on("click", function(e) {
    e.preventDefault();
    $("#upload_container .title").show();
    $(".complex_add_photo").show();
    $("#upload_container .hint").show();
});

$(".close_add_photo").on("click", function() {
    $(".complex_add_photo").hide();
});

var myDropzone = new Dropzone(".dropzone", {
    url: "/file/post",
    accept: function(file, done) {
        $("#upload_container .title").hide();
        $("#upload_container .hint").hide();
        $('.output_fiel').html(file.name);
    }
});