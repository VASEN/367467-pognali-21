let header = document.querySelector(".header");
let headerMenu = header.querySelector(".header__menu");
let menuToggle = header.querySelector(".header__menu-toggle");

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  header.classList.toggle("header--opened");
  headerMenu.classList.toggle("header__menu--opened");
  menuToggle.classList.toggle("header__menu-toggle--opened");
})
