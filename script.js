document.addEventListener("DOMContentLoaded", function() {
    (function(){
        emailjs.init("OLe946Ea9xBMBQBAp");  // This should be your EmailJS User ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Prepare the email parameters
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('service_vt2mlmp', 'template_wgu05b8', templateParams) // Replace with your actual Service ID and Template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
            }, function(error) {
                console.error('FAILED...', error);
                alert('There was an error sending your message. Please try again.');
            });

        // Clear form after submission
        document.getElementById('contact-form').reset();
    });
});
