// Get elements
const featuresButton = document.querySelector("#features-dropdown");
const featuresText = document.querySelector("#features-text");
const featuresArrow = document.querySelector("#features-arrow");
const featuresPopup = document.querySelector("#features-popup");

// Function to show popup
function showPopup() {
  featuresPopup.classList.remove("popup-hide");
  featuresPopup.classList.add("popup-show");
  featuresText.classList.add("black");
}

// Function to hide popup
function hidePopup() {
  featuresPopup.classList.add("popup-hide");
  setTimeout(() => {
    featuresPopup.classList.remove("popup-show");
  }, 300); // Timeout matches the animation duration in the scss file
  featuresText.classList.remove("black");
}

function toggleArrow() {
  if (featuresPopup.classList.contains("popup-show")) {
    featuresArrow.src = "/images/icon-arrow-down.svg";
  } else {
    featuresArrow.src = "/images/icon-arrow-up.svg";
  }
}

// Toggle popup on navItem click
featuresButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleArrow();
  if (featuresPopup.classList.contains("popup-show")) {
    hidePopup();
  } else {
    showPopup();
  }
});

// Hide popup when clicking outside
document.addEventListener("click", function () {
  if (featuresPopup.classList.contains("popup-show")) {
    toggleArrow();
    hidePopup();
  }
});

// Prevent the popup from closing if the user clicks on the popup
featuresPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
