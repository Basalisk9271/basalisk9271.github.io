// JavaScript to highlight active link based on current URL
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarUl = document.querySelector(".navbar-nav");

      // Get the custom color from the CSS variable --bs-orange
      const ulColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-orange');

    navLinks.forEach(link => {
        const linkHref = link.href; // Get the full URL of the link

        if (currentLocation === linkHref) {
            // Remove the active class from all links before adding it to the current one
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
                navLink.style.color = ""; // Remove any inline color styles
            });

            link.classList.add("active");
            link.style.color = ulColor; // Apply the custom color to the active link
        }
    });
});