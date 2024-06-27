// Get all the review items
const reviewItems = document.querySelectorAll(".reviews__item");

// Get the left and right buttons
const btnLeft = document.querySelector(".reviews__btn-left");
const btnRight = document.querySelector(".reviews__btn-right");

// Keep track of the current index
let currentIndex = 0;

// Function to show the current review item with animation
// Function to show the current review item with animation
function showReview(index) {
  // Hide all review items
  reviewItems.forEach((item) => {
    item.classList.remove("show");
  });

  // Show the current review item
  reviewItems[index].classList.add("show");
}
// Show the first review item initially
showReview(currentIndex);

// We need to keep track of faded in elements so we can apply fade out later in CSS
document.addEventListener("animationstart", function (e) {
  if (e.animationName === "fade-in") {
    e.target.classList.add("did-fade-in");
  }
});

document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.remove("did-fade-in");
  }
});

// Add click event listeners to the buttons
btnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
  showReview(currentIndex);
});

btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviewItems.length;
  showReview(currentIndex);
});
