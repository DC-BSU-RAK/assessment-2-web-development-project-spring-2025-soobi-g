// handling submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! our team will get in touch with you soon.');
    this.reset();
});

// greeting
window.onload = function() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
    
    const greetingElement = document.createElement('p');
    greetingElement.textContent = `${greeting} and welcome to Chu Dr Tidjani Damerdji Tlemcen`;
    greetingElement.style.textAlign = 'center';
    greetingElement.style.margin = '10px 0';
    greetingElement.style.color = '#0056b3';
    greetingElement.style.fontWeight = 'bold';
    
    const header = document.querySelector('header');
    if (header) header.appendChild(greetingElement);
};
