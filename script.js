// JavaScript for additional interactivity (if needed)
document.addEventListener('DOMContentLoaded', () => {
    console.log('MD Suppliers website loaded');
    
    // Example: Handling navigation (could add smooth scrolling or dynamic content)
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Navigating to ${this.textContent}`);
            // Add custom navigation or scrolling behavior here
        });
    });
});
