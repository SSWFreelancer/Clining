document.addEventListener('DOMContentLoaded', function(event) {
   const instructionPlay = document.querySelectorAll('.instruction__image');
   instructionPlay.forEach(function(instructionP) {
      instructionP.addEventListener('click', function(event) {
         instructionP.classList.toggle('hide');
      });
   });
    var sliders = [];
    function initSwipers() {
      var swiperElements = document.querySelectorAll('.company-start__swiper');
      swiperElements.forEach(function (element) {
        swiper = new Swiper(element, {
          speed: 600,
          spaceBetween: 20,
          slidesPerView: 1,
          navigation: {
            nextEl: element.parentNode.querySelector('.swiper-button-next'),
            prevEl: element.parentNode.querySelector('.swiper-button-prev'),
          },
          breakpoints: {
            550: {
              slidesPerView: 2,
            }
          }
      });

        sliders.push(swiper);
      });
    }
    function destroySwipers() {
      sliders.forEach(function (swiper) {
        swiper.destroy();
      });
      sliders = [];
    }
    function handleWindowResize() {
      if (window.innerWidth <= 767 && sliders.length === 0) {
        initSwipers();
      } else if (window.innerWidth > 767 && sliders.length > 0) {
        destroySwipers();
      }
    }
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
});

