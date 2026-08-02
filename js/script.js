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
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});
const cards = document.querySelectorAll("#diensten .card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});
