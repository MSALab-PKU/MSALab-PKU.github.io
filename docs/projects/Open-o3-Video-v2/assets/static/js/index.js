// Navbar behavior from the v1 project page, without unused interpolation assets.
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', function () {
    var active = burger.classList.toggle('is-active');
    menu.classList.toggle('is-active', active);
    burger.setAttribute('aria-expanded', String(active));
  });
});
