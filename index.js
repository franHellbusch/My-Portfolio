const darkmodeToggle = document.querySelector("#darkmodeToggle");

// change theme
darkmodeToggle.addEventListener("click", () => {
    darkmodeToggle.disabled = true;
    document.body.classList.toggle("dark-theme-variables");
    const homeElement = document.querySelector("#home");
    let backgroundImage = getComputedStyle(homeElement).backgroundImage;
    if (
        backgroundImage.includes("background-light.png") ||
        backgroundImage.includes("background-light-phone.png")
    ) {
        screen.width <= 640
            ? (homeElement.style.backgroundImage =
                  "url(./assets/background-dark-phone.png)")
            : (homeElement.style.backgroundImage =
                  "url(./assets/background-dark.png)");
    } else {
        screen.width <= 640
            ? (homeElement.style.backgroundImage =
                  "url(./assets/background-light-phone.png)")
            : (homeElement.style.backgroundImage =
                  "url(./assets/background-light.png)");
    }
    setTimeout(() => {
        darkmodeToggle.disabled = false;
    }, 200);
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

// contact form
(function () {
    emailjs.init("JOnUIgvKxSKzm0vzz");
})();

const contactForm = document.getElementById("contactForm");

window.onload = function () {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const sendFormButton = document.getElementById("sendFormButton");
        sendFormButton.disabled = true;
        sendFormButton.classList.add("clicked-button");
        const lastChild = contactForm.lastElementChild;
        const message = document.createElement("span");
        await emailjs
            .sendForm("service_n48939a", "template_bcrd4qk", this)
            .then(
                function () {
                    message.className = "success-message";
                    message.innerHTML =
                        "Message sent. Please check your email.";
                    contactForm.insertBefore(message, lastChild);
                    console.log("SUCCESS!");
                },
                function (error) {
                    message.className = "success-message";
                    message.innerHTML =
                        "Error occurred. Please try again later.";
                    contactForm.insertBefore(message, lastChild);
                    console.log("FAILED...", error);
                }
            );
        sendFormButton.disabled = false;
        sendFormButton.classList.remove("clicked-button");
        setTimeout(() => {
            contactForm.removeChild(message);
        }, 4000);
    });
};
