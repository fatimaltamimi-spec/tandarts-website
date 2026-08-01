document.addEventListener("DOMContentLoaded", function () {

    let lastScroll = 0;
    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", function () {

        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add("hide");
        } 
        else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;

    });

});
