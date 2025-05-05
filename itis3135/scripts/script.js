function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    emailjs
    .send("DanScrumMaster", "template_5dzx49q", templateParams)
    .then(() => {
        alert("Email Sent!!");
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        alert("Email not sent");
        console.error(error);
    });
}