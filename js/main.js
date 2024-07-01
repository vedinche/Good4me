// arrow to top
document.querySelector(".back-to-top").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;

  if (scrolled > 1950) {
    document.querySelector(".back-to-top").classList.add("active");
  } else {
    document.querySelector(".back-to-top").classList.remove("active");
  }
});

//splide social
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 2,
  fixedWidth: "318px",
  focus: "left",
});

splide.mount();
