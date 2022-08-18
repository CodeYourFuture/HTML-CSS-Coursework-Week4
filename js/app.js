const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


/*function myFunc(){
    alert("You Clicked Me");
 }*/

 /*const hamburger = document.querySelector(".toggle-button");
 const navMenu = document.querySelector(".navbar-links");

 hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
 })*/
