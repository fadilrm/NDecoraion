var floatingButton = document.getElementById("whatsapp");
var position = 0;
var lastPosition = 0;
var delta = 5;

window.addEventListener("scroll", function () {
    position = window.scrollY;
    if (lastPosition - position > 0) {
        floatingButton.style.bottom = "20px";
    } else {
        floatingButton.style.bottom = "-100px";
    }
    lastPosition = position;
});
