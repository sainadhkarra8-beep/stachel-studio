document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;

    const scriptURL = "https://script.google.com/macros/s/AKfycbwr7z10LCNS8rM_hk4-_JD1aTM4i9Mo-x5XKCnRaeSusp-RORc9F_t3oRQIN1PRxS6r2A/exec";

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        }

    })
    .then(response => response.json())
    .then(data => {
        alert("Thank you! Your enquiry has been received.");
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });
});