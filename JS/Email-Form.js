const serviceID = 'your_service_id';
const templateID = 'your_template_id';
const userID = 'your_user_id';

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const data = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };
    emailjs.send(serviceID, templateID, data, userID)
        .then(function(response) { document.getElementById('responseMessage').innerText = '[*] SUCCESS: Your message has been sent Successfully!'; },
        function(error) { document.getElementById('responseMessage').innerText = '[!] FAILED: Sorry, Something went Wrong. Please try again later.'; });
});
