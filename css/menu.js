



const menu_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav")

if (menu_btn) { 
  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
  });
}




