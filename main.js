// Get Navbar
const circleBlue = document.querySelector('.circle')

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    circleBlue.classList.add('hide-me')
  }
};