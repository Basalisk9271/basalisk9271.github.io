// JavaScript to highlight active link based on current URL
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        if (currentLocation === linkHref) {
            // Remove the active class from all links before adding it to the current one
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });

            link.classList.add("active");
        }
    });
});
