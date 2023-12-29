// Get elements
const navItems = document.querySelectorAll(".navbar__dropdown");
// const navItemText = document.querySelector("#features-text");
// const navItemArrow = document.querySelector("#features-arrow");
const popups = document.querySelectorAll(".navbar-popup");

// // Function to show popup
// function showPopup() {
//   featuresPopup.classList.remove("popup-hide");
//   featuresPopup.classList.add("popup-show");
//   navItemText.classList.add("black");
// }

// Function to show a specific popup
function showPopup(popup) {
  popup.classList.remove("popup-hide");
  popup.classList.add("popup-show");
}

// // Function to hide popup
// function hidePopup() {
//   featuresPopup.classList.add("popup-hide");
//   setTimeout(() => {
//     featuresPopup.classList.remove("popup-show");
//   }, 300); // Timeout matches the animation duration in the scss file
//   navItemText.classList.remove("black");
// }

// Function to hide a specific popup
function hidePopup(popup) {
  popup.classList.add("popup-hide");
  popup.classList.remove("popup-show");
}

function toggleArrow(popup) {
  if (featuresPopup.classList.contains("popup-show")) {
    navItemArrow.src = "/images/icon-arrow-down.svg";
  } else {
    navItemArrow.src = "/images/icon-arrow-up.svg";
  }
}

// Function to toggle popup
function togglePopup(popup) {
  if (popup.classList.contains("popup-show")) {
    hidePopup(popup);
  } else {
    showPopup(popup);
  }
}

// // Toggle popup on navItem click
// featuresButton.addEventListener("click", function (event) {
//   event.stopPropagation();
//   toggleArrow();
//   if (featuresPopup.classList.contains("popup-show")) {
//     hidePopup();
//   } else {
//     showPopup();
//   }
// });

// Attach event listeners to each nav item
navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    // event.preventDefault();
    event.stopPropagation();

    const popupId = navItem.getAttribute("data-popup");
    const popup = document.getElementById(popupId);

    // Hide all popups
    popups.forEach((p) => hidePopup(p));

    // Toggle the clicked nav item's popup
    togglePopup(popup);
  });
});

// // Hide popup when clicking outside
// document.addEventListener("click", function () {
//   if (featuresPopup.classList.contains("popup-show")) {
//     toggleArrow();
//     hidePopup();
//   }
// });

// Hide all popups when clicking outside
document.addEventListener("click", function () {
  popups.forEach((popup) => {
    if (popup.classList.contains("popup-show")) {
      hidePopup(popup);
    }
  });
});

// Prevent the popup from closing if the user clicks on the popup
// featuresPopup.addEventListener("click", (event) => {
//   event.stopPropagation();
// });
