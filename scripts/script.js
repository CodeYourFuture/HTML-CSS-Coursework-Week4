window.onload = () => {
  var promoText = ["Call Us Now! 123-456-7890", "We Deliver to Your Doorstep"];
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("fa-bars");
    document.getElementById("hamburger").classList.toggle("fa-times");
    document.getElementById("login").classList.toggle("open");
  });
  var i = 0;
  setInterval(() => {
    document.getElementById("dynamic-text").innerHTML = promoText[i];
    if (i == 0) {
      i = 1;
    } else i = 0;
  }, 3000);
};
