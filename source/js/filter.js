var filter = document.querySelector(".filter");
var filterToggle = filter.querySelector(".filter__toggle");
var filterContinentList = filter.querySelector(".filter__continent-list");
var filterContent = filter.querySelector(".filter__content-wrapper");
var filterClose = filter.querySelector(".filter__close-button");

filterToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  filter.classList.toggle("filter--opened");

  filterContent.classList.toggle("filter__content-wrapper--opened");
  filterContinentList.classList.toggle("filter__continent-list--show");

  if (filterContent.classList.contains("filter__content-wrapper--closed")) {
    filterContent.classList.remove("filter__content-wrapper--closed");
  } else {
    filterContent.classList.add("filter__content-wrapper--closed");
  }
});

filterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  filter.classList.toggle("filter--opened");

  filterContent.classList.toggle("filter__content-wrapper--opened");
  filterContinentList.classList.toggle("filter__continent-list--show");

  if (filterContent.classList.contains("filter__content-wrapper--closed")) {
    filterContent.classList.remove("filter__content-wrapper--closed");
  } else {
    filterContent.classList.add("filter__content-wrapper--closed");
  }
});
