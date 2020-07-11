$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 800,
        pause: 10000,
        autoDelay: 1000,
        nextText: '<i class="fas fa-chevron-right"></i>',
        prevText: '<i class="fas fa-chevron-left"></i>'
    });
    $('.business__slideshow').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow: '<div class="button-arr btn-arr-prev">Prev</div>',
        nextArrow: '<div class="button-arr btn-arr-next">Next</div>',
    });
});