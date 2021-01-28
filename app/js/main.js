$(function(){

  $('.filter-recent__stars').rateYo({
    starWidth: "14px",
    readOnly: true,
    normalFill: "#D6D6D6",
    ratedFill: "#FFCC00",
    numStars: 5,
    fullStar: true,
    spacing: "4px"
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  
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