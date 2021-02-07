
$(document).ready(function(){
    $('.hero__slider').slick({
        autoplay: true,
        fade: true,
        dots: true,
        arrows: false,
    });

    $('.reviews__slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});