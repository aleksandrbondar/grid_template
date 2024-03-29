$(document).ready(function () {
  $('.header-navbar__btn').click(function () {
    if ($('.header-navbar__btn').hasClass('header-navbar__btn--active')) {
      $('.header-menu').toggleClass('header-menu--rotate180');
      setTimeout(function () {
        $('.header-logo').toggleClass('header-logo--hiden');
        $('.header-navbar__list').toggleClass('header-navbar__list--active');
      }, 1000);
      $('.header-menu').toggleClass('header-menu--rotate90');
      $(this).toggleClass('header-navbar__btn--active');
    } else {
      $(this).toggleClass('header-navbar__btn--active');
      setTimeout(function () {
        $('.header-menu').toggleClass('header-menu--rotate90');
        $('.header-logo').toggleClass('header-logo--hiden');
        $('.header-navbar__list').toggleClass('header-navbar__list--active');
      }, 1000);
      $('.header-menu').toggleClass('header-menu--rotate180');
    }
  });
});

// $(document).ready(function () {
//   if ($('.header-navbar__btn').hasClass('header-navbar__btn--active')) {
//     alert('yes');
//   } else {
//     alert('no');
//   }
// });