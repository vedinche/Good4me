let searchOpen = document.querySelector(".search-open");
let searchModal = document.querySelector(".search-modal");
let searchInput = document.querySelector(".search-form__input");

searchOpen.addEventListener("click", function () {
  openModal();
});

window.addEventListener("click", function (event) {
  if (event.target === searchModal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    openModal();
  } else if (event.key === "Escape") {
    closeModal();
  }
});

function openModal() {
  if (
    document.activeElement === searchOpen &&
    !searchOpen.classList.contains("currency__caption")
  ) {
    searchModal.classList.add("open");
    searchOpen.classList.add("hide");
    searchModal.addEventListener("transitionend", setFocus);
  }
}

function setFocus() {
  searchInput.focus();
  searchModal.removeEventListener("transitionend", setFocus);
}

function closeModal() {
  searchModal.classList.remove("open");
  searchOpen.classList.remove("hide");
}
