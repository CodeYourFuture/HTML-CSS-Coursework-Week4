// let changedNavbarText = document.getElementById("changedNavbar");

(function () {
  let sentences = ["We Deliver to Your Doorstep", "Call Us Now! 123-456-789"],
    i = 0;
  setInterval(function () {
    $("#changedNavbar").fadeOut(function () {
      $(this)
        .html(sentences[(i = (i + 1) % sentences.length)])
        .fadeIn();
    });
  }, 100);
})();

// let t = setInterval(function () {
//   $("#changedNavbar").html(sentences[1]);
// }, 2000);

// function changeTextOfNavbar(text) {
//   text === sentences[0]
//     ? (text.innerHTML = sentences[1])
//     : (text.innerHTML = sentences[0]);
// }

// window.onload = function () {
//   window.setInterval(changeTextOfNavbar(changedNavbarText), 100);
// };

// window.setInterval(function () {
//   changedNavbarText === sentences[0]
//     ? (changedNavbarText.innerHTML = sentences[1])
//     : (changedNavbarText.innerHTML = sentences[0]);
//   alert("hello, do you have a beer?");
// }, 100);
