console.log("Welcome to TechNova");

const welcomeButton = document.getElementById("welcomeButton");

welcomeButton.addEventListener("click", function () {
    alert("Welcome to TechNova! Smart Technology. Real Business Growth.");
});

const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();

    formResponse.textContent = "Sending your message...";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formResponse.textContent =
                "Thank you, " + customerName +
                "! Your message has been sent successfully.";

            contactForm.reset();
        } else {
            formResponse.textContent =
                "Sorry, your message could not be sent. Please try again.";
        }
    } catch (error) {
        formResponse.textContent =
            "There was a connection problem. Please try again.";
    }
});