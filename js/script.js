$(document).ready(function (event) {
    $('.steps__image').click(function(event){
      $(this).addClass('hide');
    });
    $('.questions__top').click(function(event){
      $(this).toggleClass('show').next().slideToggle();
    });
   $('.results__slider').slick({
      arrows: true,
      dots: false,
      infinite:true,
      slidesToShow: 1,
      fade:true,
      touchThreshold:50,
      speed: 600,    
   }); 
    $('.steps__item-btn, .steps__card-btn, .results__content>a').click(function(event){
      event.preventDefault();
      $('.popup').addClass('open');
      $('body').addClass('lock');
      $('.popup').find('iframe').attr('src', $('.popup').find('iframe').attr('data-src'));
    });

    $('.popup>p, .popup__content>b').click(function(event){
      $('.popup').find('iframe').attr('src', '');
      $('.popup').find('.popup__poster').removeClass('hide');
      $(this).closest('.popup').removeClass('open')
      $('body').removeClass('lock');
    });

    $('.innumbers__image').click(function(event){
      $(this).addClass('hide');
    });
    $('.blog__burger').click(function(event){
      $(this).toggleClass('active');
      $(this).next('ul').slideToggle();
    });
    $('.blog__list>li>a img').click(function(event){
      event.preventDefault();
      $(this).parent().parent().toggleClass('active');
    });
});

