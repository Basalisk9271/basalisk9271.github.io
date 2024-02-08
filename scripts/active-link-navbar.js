// JavaScript to highlight active link based on current URL
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (currentLocation.includes(linkPath)) {
            link.classList.add("active");
            link.style.color = "orange";
        }
    });
});
