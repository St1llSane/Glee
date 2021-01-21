$(function(){
  
  $('.slider-top__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // $('.products-week__btn--heart').on('click', function(){
  //   $('.products-week__btn--heart, .products-week__icon--heart').toggleClass('active');
  // });
  $('.products-week__btn--heart').on('click', function(){
    $(this).toggleClass('active')
  });
  
  var mixer = mixitup('.products-week__wrapper', {

  });

});