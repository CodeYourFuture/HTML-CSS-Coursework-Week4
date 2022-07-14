const hamburgerHome = document.querySelector(".hamburgerHome");
const hamburgerResume = document.querySelector(".hamburgerResume");
// const hamburgerProjects = document.querySelector(".hamburgerProjects");
// const hamburgerContact = document.querySelector(".hamburgerContact");

const navMenuHome = document.querySelector(".nav-menuHome");
const navMenuResume = document.querySelector(".nav-menuResume");

hamburgerHome.addEventListener("click", mobileMenu);
hamburgerResume.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerHome.classList.toggle("active");
  // hamburgerResume.classList.toggle("active");
  navMenuHome.classList.toggle("active");
  // navMenuResume.classList.toggle("active");
  console.log("working");
}

//closing the menu
const navLinkHome = document.querySelectorAll(".nav-linkHome");
const navLinkResume = document.querySelectorAll(".nav-linkResume");

navLinkHome.forEach((n) => n.addEventListener("click", closeMenu));
navLinkResume.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerHome.classList.remove("active");
  hamburgerResume.classList.remove("active");
  navMenuHome.classList.remove("active");
  navMenuResume.classList.remove("active");
}
