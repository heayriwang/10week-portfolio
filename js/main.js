$(function () {

    $('h1').on('click', function () {
        console.log('작동함')
    });

    $(window).on('scroll', function () {
        console.log('스크롤', $(window).scrollTop());

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        }
        else {
            $('#header').removeClass('on');
        }

    });

    // mainSlide
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        //c = 0,1,2
        var current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');
    });

    $('.mainSlide').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainSlide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');

    });








})