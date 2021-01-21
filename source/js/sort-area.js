var sortAreas = document.querySelectorAll(".sort__area");
var sortButton = document.querySelectorAll(".sort__area-toggle");

for (var i = 0; i < sortButton.length; i++) {
  sortButton[i].addEventListener("click", function (evt) {
    sortAreas[i].classList.toggle("sort__area--show");
  })
}
