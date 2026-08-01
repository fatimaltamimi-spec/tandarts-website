let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // naar beneden scrollen → header verbergen
        header.classList.add("hide");
    } else {
        // omhoog scrollen → header terug
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;

});
