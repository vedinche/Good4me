let tabLinks = document.querySelectorAll(".forms-tab__btn");
let tabContents = document.querySelectorAll('div[id$="tab-content"]');

tabLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    tabLinks.forEach(function (tabLink) {
      tabLink.classList.remove("active");
    });
    this.classList.add("active");

    let tabContentId = this.getAttribute("href");
    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });
    let tabContent = document.querySelector(tabContentId);
    tabContent.classList.add("active");
    setTimeout(function () {
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });
      tabContent.style.display = "block";
    }, 20);
  });
});

//modal
let formsOpen = document.querySelector(".forms-open");
let formsClose = document.querySelectorAll(".forms__close-btn");
let formsModal = document.querySelector(".forms");

formsOpen.addEventListener("click", () => {
  formsModal.classList.add("open");
});

formsClose.forEach((button) => {
  button.addEventListener("click", () => {
    formsModal.classList.remove("open");
  });
});

window.addEventListener("click", (event) => {
  if (event.target === formsModal) {
    formsModal.classList.remove("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && formsModal.classList.contains("open")) {
    formsModal.classList.remove("open");
  }
});
