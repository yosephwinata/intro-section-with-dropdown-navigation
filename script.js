// Get elements
const featuresButton = document.querySelector("#features-dropdown");
const featuresPopUp = document.querySelector("#features-popup");

// Declare functions
const handleFeaturesDropdownClick = (event) => {
  console.log("toto");
  featuresPopUp.classList.toggle("hidden");
  event.stopPropagation();
};

// Add event listeners
featuresButton.addEventListener("click", handleFeaturesDropdownClick);

// Hide popup when clicking outside of it
document.addEventListener("click", function (event) {
  if (!featuresPopUp.contains(event.target)) {
    featuresPopUp.classList.add("hidden");
  }
});

// Prevent the popup from closing when the user clicks on the popup
featuresPopUp.addEventListener("click", (event) => {
  event.stopPropagation();
});
