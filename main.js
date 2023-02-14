
const OVERFLOW = document.querySelector('#toggle1');

OVERFLOW.addEventListener('click', (event) => {
    if (event.target.checked) {
        OVERFLOW_HIDE();
    } else (OVERFLOW_SHOW())
});

const OVERFLOW_HIDE = () => {
    $("body").css("overflow-y", "hidden"); 
} 

const OVERFLOW_SHOW = () => {
    $("body").css("overflow-y", "auto");
}
