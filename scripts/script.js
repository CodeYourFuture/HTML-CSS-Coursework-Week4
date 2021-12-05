window.onload = () => {
    var promoText = [
        "Call Us Now! 123-456-7890",
        "We Deliver to Your Doorstep"
    ]
    var i = 0;
    setInterval(() => {
         document.getElementById("dynamic-text").innerHTML=promoText[i];
         if (i == 0) { i = 1}
         else i=0;
    }, 3000);
}