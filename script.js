
/* =====================================
   ABHIJEET KUMAR YADAV - PORTFOLIO
   JavaScript & Python Functionality
===================================== */

// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}

// Animated Hero Text
const typingText = document.getElementById("typingText");

const roles = [
    "Aspiring Software Developer",
    "Java Programming Learner",
    "C & C++ , Java Programmer, Python in Training",
    "B.Tech CSE Student",
    "Civil Engineering Professional"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let delay = deleting ? 40 : 85;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        delay = 1500;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    setTimeout(typeRole, delay);
}

// Start animation
if (typingText) {
    typeRole();
}

// Automatically update copyright year
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Update this with your actual professional email when ready.
const recipientEmail = "hello@abhijeetyadav.dev";

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formStatus.textContent = "Please fill in all fields.";
            return;
        }

        if (!recipientEmail || recipientEmail.includes("your") || recipientEmail.includes("example.com")) {
            formStatus.textContent =
                "Update the recipient email in script.js to enable direct sending.";
            return;
        }

        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            "Name: " + name +
            "\nSender Email: " + email +
            "\n\nMessage:\n" + message
        );

        const mailtoLink =
            "mailto:" + recipientEmail +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        formStatus.textContent =
            "Opening your email application. Please review and send the message.";

        window.location.href = mailtoLink;
    });
}
