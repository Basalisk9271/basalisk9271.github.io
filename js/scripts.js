/*!
* Gabe Imlay - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Gabe Imlay
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


    // JavaScript to highlight active link based on current URL
    document.addEventListener("DOMContentLoaded", function() {
        const currentLocation = window.location.href;
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    
        navLinks.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add("active");
                link.style.color = -bg-orange; // Add this line to set the text color to orange
            }
        });
    });
