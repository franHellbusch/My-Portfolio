const darkmodeToggle = document.querySelector("#darkmodeToggle");

// change theme
darkmodeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    const homeElement = document.querySelector("#home");
    let backgroundImage = getComputedStyle(homeElement).backgroundImage;
    if (backgroundImage.includes("background-light.png")) {
        homeElement.style.backgroundImage = "url(./assets/background-dark.png)";
    } else {
        homeElement.style.backgroundImage =
            "url(./assets/background-light.png)";
    }
});

// hamburger menu
const checkbox = document.querySelector("#navCheck");
const navLinks = document.getElementById("navLinks");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});

const navLinksAnchors = document.querySelectorAll(".nav-links-anchors");

navLinksAnchors.forEach((link) => {
    link.onclick = () => {
        if (screen.width <= 640) {
            navLinks.style.display = "none";
            checkbox.checked = false;
        }
    };
});
