$(function(){

  $('.product-details__form-numbers').styler();

  $('.product-slider__thumb').slick({
    arrows: false,
    vertical: true,
    slidesToShow: 3,
    asNavFor: '.product-slider__big',
    centerMode: false,
    focusOnSelect: true,
  });
  $('.product-slider__big').slick({
    arrows: false,
    draggable: false,
    asNavFor: '.product-slider__thumb',
    fade: true
  });

  $('.user-nav__btn-list').on('click', function(){
    $('.products-list__item').toggleClass('products-list__item--active')
  });

  $('.filter-recent__stars').rateYo({
    starWidth: "14px",
    readOnly: true,
    normalFill: "#D6D6D6",
    ratedFill: "#FFCC00",
    numStars: 5,
    fullStar: true,
    spacing: "4px"
  });

  $('.products-week__stars, .product-details__stars').rateYo({
    starWidth: "18px",
    readOnly: true,
    normalFill: "#D6D6D6",
    ratedFill: "#FFCC00",
    numStars: 5,
    fullStar: true,
    spacing: "11px"
  });

  function my_prettify (n) {
    return n.toFixed(2);
  }
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
    },
    prettify: my_prettify,
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