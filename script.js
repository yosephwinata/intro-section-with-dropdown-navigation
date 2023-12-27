const featuresButton = document.querySelector("#features-dropdown");
const featuresPopUp = document.querySelector("#features-popup");

const handleFeaturesDropdownClick = () => {
  featuresPopUp.classList.toggle("hidden");
};

featuresButton.addEventListener("click", handleFeaturesDropdownClick);

// TODO: Use an invisible div beneath the pop up.
// So when the user clicks outside the pop up, the pop up closes.
