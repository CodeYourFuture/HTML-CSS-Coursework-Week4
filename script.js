let toggle = false;

const hamburgerMenu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");
const hamburgerTop = document.getElementById("top");
const hamburgerMiddle = document.getElementById("middle");

hamburgerMenu.addEventListener("click", function () {
  // console.log("hello");
  toggle = !toggle;
  console.log(toggle);
  if (toggle) {
    navbar.classList.remove("hide");
    if (window.screen.width > 900) {
      navbar.classList.add("sidebar");
      hamburgerTop.style.borderColor = "#fff";
      hamburgerMiddle.style.borderColor = "#fff";
      hamburgerMenu.style.gridColumn = "4/5";
    } else {
      navbar.classList.add("navbar");
    }
  } else {
    navbar.classList.remove("navbar");
    navbar.classList.remove("sidebar");
    hamburgerTop.style.borderColor = "#000";
    hamburgerMiddle.style.borderColor = "#000";
    navbar.classList.add("hide");
    if (window.screen.width > 900) {
      hamburgerMenu.style.gridColumn = "1/2";
    }
  }
});
