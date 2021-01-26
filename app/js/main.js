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

  $('.partners-slider__wrapper').slick({
    arrows: false,
    autoplay: 2000,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
  });
  
  var mixer1 = mixitup('.products-week__wrapper', {
    selectors: {
      control: '.filter-1'
    }
  });
  var mixer2 = mixitup('.design__wrapper', {
    selectors: {
      control: '.filter-2'
    }
  });
  
});

// .design__wrapper