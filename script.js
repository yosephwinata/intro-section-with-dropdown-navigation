// Get elements
const navItems = document.querySelectorAll(".navbar__dropdown");
const popups = document.querySelectorAll(".navbar-popup");
const texts = document.querySelectorAll(".navbar__text");
const arrows = document.querySelectorAll(".navbar__arrow-icon");

// Show a specific popup
function showPopup(popup) {
  popup.classList.remove("popup-hide");
  popup.classList.add("popup-show");
}

// Hide a specific popup
function hidePopup(popup) {
  popup.classList.add("popup-hide");
  popup.classList.remove("popup-show");
}

// Add highlight to a specific text
function addTextHighlight(text) {
  text.classList.add("black");
}

// Remove highlight from a specific text
function removeTextHighlight(text) {
  text.classList.remove("black");
}

// Change the arrow image to the one that points upwards
function setUpArrow(arrow) {
  arrow.src = "/images/icon-arrow-up.svg";
}

// Change the arrow image to the one that points downwards
function setDownArrow(arrow) {
  arrow.src = "/images/icon-arrow-down.svg";
}

// Attach event listeners to each nav item
navItems.forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    event.stopPropagation();

    // Reset all states
    popups.forEach((p) => hidePopup(p));
    texts.forEach((t) => removeTextHighlight(t));
    arrows.forEach((a) => setDownArrow(a));

    const popupId = navItem.getAttribute("data-popup");
    const textId = navItem.getAttribute("data-text");
    const arrowId = navItem.getAttribute("data-arrow");

    const popup = document.getElementById(popupId);
    const text = document.getElementById(textId);
    const arrow = document.getElementById(arrowId);

    showPopup(popup);
    addTextHighlight(text);
    setUpArrow(arrow);
  });
});

// When clicking outside the popup, hide all popouts, reset all arrows and all text colors
document.addEventListener("click", function () {
  navItems.forEach((navItem) => {
    const popupId = navItem.getAttribute("data-popup");
    const textId = navItem.getAttribute("data-text");
    const arrowId = navItem.getAttribute("data-arrow");

    const popup = document.getElementById(popupId);
    const text = document.getElementById(textId);
    const arrow = document.getElementById(arrowId);

    if (popup.classList.contains("popup-show")) {
      hidePopup(popup);
      removeTextHighlight(text);
      setDownArrow(arrow);
    }
  });
});
