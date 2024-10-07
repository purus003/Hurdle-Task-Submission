document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';

    document.getElementById('contactForm').reset();
});
