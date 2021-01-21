$(function(){
  
  $('.slider-top__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.products-week__btn--heart').on('click', function(){
    $(this).toggleClass('active')
  });

  $('.video__wrapper').fancybox({});
  
  var mixer = mixitup('.products-week__wrapper', {});

});