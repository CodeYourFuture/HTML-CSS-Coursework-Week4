// BRING UP MENU
function showMenu() {
    var x = document.getElementById("menu-list");
    if (x.style.display === "none") {
        x.style.display = "flex";
        document.getElementById("bar-two").style.opacity = "0";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("bar-one").style.transform =
            " translateY(8px) rotate(-45deg)";
        document.getElementById("bar-three").style.transform =
            "translateY(-8px) rotate(45deg)";
    } else {
        x.style.display = "none";
        document.getElementById("bar-two").style.opacity = "1";
        document.getElementById("bar-one").style.transform =
            "translateY(0) translateY(0) rotate(0)";
        document.getElementById("bar-three").style.transform =
            "translateY(0) translateY(0) rotate(0)";
    }
}

// CHANGING TEXT
var text = ["We Deliver to Your Doorstep", "Call Us Now! 123-456-7890"];
var counter = 0;
var elem = document.getElementById("changing-text");
var inst = setInterval(changeText, 5000);

function changeText() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

changeText();

// MAP
function initMap() {
    const prickles = { lat: 37.77115113296127, lng: -122.38714525546828 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: prickles,
    });
    const marker = new google.maps.Marker({
        position: prickles,
        map: map,
    });
}