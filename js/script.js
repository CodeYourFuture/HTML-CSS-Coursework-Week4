const hamburgerMenu = document.getElementById('hamburger');
const firstHamburgerMenu = document.getElementById('responsive-hamburger');
const navLinks = document.getElementById('nav-links');
const cover = document.querySelector('#cover')
const responsiveDisplay = document.getElementById('responsive-display')

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('toggle');
    responsiveDisplay.style.display= 'flex'
    
    
})
firstHamburgerMenu.addEventListener('click', function() {
    
    firstHamburgerMenu.classList.toggle('toggle');
    responsiveDisplay.style.display = 'none'
    
    
})


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.form-bg-image', 3, {y: -530})
.to('.form-box', 3, {y: -100})


let scene = new ScrollMagic.Scene({
    triggerElement: ".form",
    duration: "100%",
    triggerHook: 1.5

})
.setTween(timeline)
.setPin(".form")
.addTo(controller);