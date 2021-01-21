var profile = document.querySelector(".profile");

var profileModalOpen = profile.querySelector(".button-business");
var profileModal = profile.querySelector(".profile__modal");
var profileModalClose = profileModal.querySelector(".button-profile");

profileModalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileModal.classList.add("profile__modal--opened");
})

profileModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileModal.classList.remove("profile__modal--opened");
})
