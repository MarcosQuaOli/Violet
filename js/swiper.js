$(document).ready(function () {
  //initialize swiper when document ready
  let swiperPhoto = new Swiper ('.swiper-container', {
    // Optional parameters
    spaceBetween: 30,
    speed: 1000,
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});