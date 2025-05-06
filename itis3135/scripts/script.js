function sendMail(event) {
    event.preventDefault();
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };

    console.log("Attempting to send email with:");
    console.log("Service ID: service_20g5nn8");
    console.log("Template ID: template_wc1nwyq");
    console.log("Parameters:", parms);

    emailjs.send("service_20g5nn8", "template_wc1nwyq", parms)
        .then(function(response) {
            console.log("WIN", response.status, response.text);
            alert("Email Sent");
        }, function(error) {
            alert("Email failed to send. Check console.");
            console.error("EMAIL ERROR:", error);
        });
}