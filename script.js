// Simple form submission handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

// Simple greeting based on time of day
window.onload = function() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
    
    const greetingElement = document.createElement('p');
    greetingElement.textContent = `${greeting} and welcome to Hospital Tlemcen`;
    greetingElement.style.textAlign = 'center';
    greetingElement.style.margin = '10px 0';
    greetingElement.style.color = '#0056b3';
    greetingElement.style.fontWeight = 'bold';
    
    const header = document.querySelector('header');
    if (header) header.appendChild(greetingElement);
};
