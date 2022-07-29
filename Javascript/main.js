function myFunction(y) {
  y.classList.toggle("change");
  var x = document.getElementById("nav-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Get the button
var mybutton = document.getElementById("button-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function chkMediaQuery(x) {
  if (x.matches) {
    // If media query matches

    $("#btn-container").appendTo("#loc");
  } else {
    $("#btn-container").appendTo("#btn-new-loc");
  }
}
var x = window.matchMedia("(max-width: 768px)");
chkMediaQuery(x); // Call listener function at run time
x.addListener(chkMediaQuery);

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
