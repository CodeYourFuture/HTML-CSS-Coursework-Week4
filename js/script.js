// BRING UP MENU
function showMenu() {
    var x = document.getElementById("menu-list");
    if (x.style.display === "none" || x.style.display === "") {
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
        document.getElementById("body").style.overflow = "scroll";
        document.getElementById("bar-one").style.transform =
            "translateY(0) translateY(0) rotate(0)";
        document.getElementById("bar-three").style.transform =
            "translateY(0) translateY(0) rotate(0)";
    }
}

// HIDE MENU TO SHOW LINK
function hideMenu() {
    var y = document.getElementById("menu-list");
    y.style.display = "none";
    document.getElementById("bar-two").style.opacity = "1";
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("bar-one").style.transform =
        "translateY(0) translateY(0) rotate(0)";
    document.getElementById("bar-three").style.transform =
        "translateY(0) translateY(0) rotate(0)";
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
// SHOW SHOP DROPDOWN
function showShopItems() {
    var x = document.getElementById("hidden");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// SHOW CHAT SCREEN
function showChat() {
    var x = document.getElementById("chat-page");
    var y = document.getElementById("chat");
    var z = document.getElementById("close");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
        document.getElementById("body").style.overflow = "hidden";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }
}

// LOAD MORE SHOP PRODUCTS
function loadMore() {
    var x = document.getElementById("load-products");
    var y = document.getElementById("load");
    x.style.display = "block";
    y.style.display = "none";
}

// SHOW HIDDEN FAQ
function showHiddenFAQ(a) {
    var x = document.getElementById(`${a}`);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}