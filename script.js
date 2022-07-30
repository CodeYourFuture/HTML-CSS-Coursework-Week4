const closeButton=document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')
const nav = document.querySelector('.nav')

closeButton.addEventListener( "click",()=>{
    nav.classList.remove('navigation-open')
})

console.log("hello")

openButton.addEventListener("click",()=>{
    nav.classList.add ('navigation-open')
})