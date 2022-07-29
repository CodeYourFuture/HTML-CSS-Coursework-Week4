function myFunction(y) {
  y.classList.toggle("change");
  var x = document.getElementById("nav-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
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
