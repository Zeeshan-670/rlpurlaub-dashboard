// Swipper

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  initialSlide: 0,
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
