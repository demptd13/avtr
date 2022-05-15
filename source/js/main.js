$(function(){
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        speed: 300,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">'
    });
});



$(document).ready(function() {
    $('.header__nav-img').click(function(event) {
        $('.nav-menu').toggleClass('nav-menu_show');
    });
});