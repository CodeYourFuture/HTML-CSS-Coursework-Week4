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