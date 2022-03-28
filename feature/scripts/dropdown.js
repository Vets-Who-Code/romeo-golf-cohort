// Mobile - dropdown
function dropdownToggle() {
  document.getElementById("nav-dropdown").classList.toggle("show");
  //close sub-menus
  document.getElementById("drop-media").classList.remove("show");
  document.getElementById("drop-apply").classList.remove("show");
  document.getElementById("drop-ourStory").classList.remove("show");
}

// Mobile - sub-dropdown
function ourStoryDropToggle() {
  document.getElementById("drop-ourStory").classList.toggle("show");
  document.getElementById("drop-media").classList.remove("show");
  document.getElementById("drop-apply").classList.remove("show");
}

function mediaDropToggle() {
  document.getElementById("drop-media").classList.toggle("show");
  document.getElementById("drop-ourStory").classList.remove("show");
  document.getElementById("drop-apply").classList.remove("show");
}

function applyDropToggle() {
  document.getElementById("drop-apply").classList.toggle("show");
  document.getElementById("drop-media").classList.remove("show");
  document.getElementById("drop-ourStory").classList.remove("show");
}

// Drop down arrow icon switch
function subDropdownArrowIcon() {
  subDropdownMenu = document.querySelectorAll("fa-arrow");

  if (sampleElem.className === "fa fa-sun") {
    sampleElem.className = "fa fa-moon";
  } else {
    sampleElem.className = "fa fa-sun";
  }
}

// Darkmode icon switch
function darkmodeToggle() {
  const sampleElem = document.getElementById("darkmodeToggle");
  const darkBody = document.body;
  const darkButton = document.getElementById("donate-btn");
  const darkButtonHover = document.getElementById("donate-btn");

  const darkBody__local = localStorage.getItem("darkBody__local");
  const darkButton__local = document.getElementById("donate-btn");
  const darkButtonHover__local = document.getElementById("donate-btn");

  //toggle properties
  darkBody.classList.toggle("dark-mode--body");
  darkButton.classList.toggle("dark-mode--donation");
  darkButtonHover.classList.toggle("dark-mode--donationHover");

  // Icon toggle
  return sampleElem.className === "fa fa-sun"
    ? (sampleElem.className = "fa fa-moon")
    : (sampleElem.className = "fa fa-sun");
}
