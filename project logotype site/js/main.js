$(function(){

$('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false /* для отмены бесконечного зацикивания слайдера*/
});

$('.news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false /* для отмены бесконечного зацикивания слайдера*/
});

$('.header__btn-menu').on('click', function(){
  $('.menu ul').slideToggle()
}); 


});