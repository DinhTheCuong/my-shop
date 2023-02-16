$(document).ready(function(){
    $('.slider1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 5000,
        dots: true
    });

    $('.slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        speed: 3000,
        dots: true
    });
  });