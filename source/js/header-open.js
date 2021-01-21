var header = document.querySelector(".header");
var headerMenu = header.querySelector(".header__menu");
var menuToggle = header.querySelector(".header__menu-toggle");
var headerLogo = header.querySelector(".header__logo-link");
var headerContacts = header.querySelector(".header__contacts");
var headerSocial = header.querySelector(".header__social");

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  header.classList.toggle("header--opened");
  headerMenu.classList.toggle("header__menu--opened");
  headerLogo.classList.toggle("header__logo-link--opened");
  menuToggle.classList.toggle("header__menu-toggle--opened");
  headerContacts.classList.toggle("header__contacts--opened");
  headerSocial.classList.toggle("header__social--opened");
})
