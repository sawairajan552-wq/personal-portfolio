
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        let result = document.querySelector("#form-result");

        if (!result) {
            result = document.createElement("p");
            result.id = "form-result";
            result.setAttribute("aria-live", "polite");
            form.appendChild(result);
        }

        if (!name || !email || !subject || !message) {
            result.textContent = "Please fill in all fields.";
            result.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            result.textContent = "Please enter a valid email address.";
            result.style.color = "red";
            return;
        }

        result.textContent =
            "Thank you, " + name +
            "! Your form has been validated successfully.";

        result.style.color = "green";

        form.reset();
    });

});