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