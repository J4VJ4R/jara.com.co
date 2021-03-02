let menu = document.querySelector('.js-menu-on');
let headerMenuMobile = $('.js-header-nav');

//event click change to x the menu hamburguer
menu.addEventListener('click', () => {
  menu.classList.toggle('active')
});

//show menu header white with tab
$(document).ready(function () {
  $('.brand__menu-on').click(function () {
    headerMenuMobile.toggleClass('header__section--light');
  });
});
