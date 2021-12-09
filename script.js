let toggle = false;

var hamburger = document.getElementById("hamburger-menu");
var navbar = document.getElementById("navbar");

hamburger.addEventListener("click", function () {
  // console.log("hello");
  toggle = !toggle;
  console.log(toggle);
  if (toggle) {
    navbar.classList.add("navbar");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.remove("navbar");
    navbar.classList.add("hide");
  }
});
