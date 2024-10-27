document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    // Here, you can implement further functionality to send the message to your server if needed.
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
