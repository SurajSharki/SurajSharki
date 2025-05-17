document.addEventListener("DOMContentLoaded", function () {
    // Style switcher toggler
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    if (styleSwitcherToggler) {
        styleSwitcherToggler.addEventListener("click", () => {
            document.querySelector(".style-switcher").classList.toggle("open");
        });
    }

    // Hide style switcher when scrolling
    window.addEventListener("scroll", () => {
        const styleSwitcher = document.querySelector(".style-switcher");
        if (styleSwitcher && styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    // Theme color selection
    const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    }

    // Day-night theme toggle
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
        dayNight.addEventListener("click", () => {
            const icon = dayNight.querySelector("i");
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
            document.body.classList.toggle("dark");
        });
    }

    // Initialize day-night theme based on body class
    if (document.body.classList.contains("dark")) {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.add("fa-sun");
        }
    } else {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.add("fa-moon");
        }
    }
});
function toggleStyleSwitcher() {
    var styleSwitcher = document.querySelector('.style-switcher');
    styleSwitcher.classList.toggle('active');
}