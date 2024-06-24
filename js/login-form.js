//for form
let loginText = document.querySelector(".login__form-top .login");
let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");
let signupLink = document.querySelector(".login__form-signup-link");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

//for form modal
let openButton = document.querySelector(".login__form-open");
let closeButton = document.querySelectorAll(".login__form-close");
let formModal = document.querySelector(".form-modal");

// Add a 'click' event for the щзут buttons
openButton.addEventListener("click", function () {
  formModal.classList.add("open");
});

// Add a 'click' event for the close buttons
for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", function () {
    formModal.classList.remove("open");
  });
}

//Close the modal window when clicking outside it
window.addEventListener("click", function (event) {
  if (event.target === formModal) {
    formModal.classList.remove("open");
  }
});
