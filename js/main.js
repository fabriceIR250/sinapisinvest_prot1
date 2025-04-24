document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== "#" && href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-lg');
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            card.classList.add('service-card');
        });
    }
    
    // Form validation enhancement
    const contactForm = document.querySelector('form[action="process_form.php"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    
                    // Add or show error message
                    let errorMessage = field.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('p');
                        errorMessage.className = 'text-red-500 text-sm mt-1 error-message';
                        errorMessage.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMessage);
                    } else {
                        errorMessage.classList.remove('hidden');
                    }
                } else {
                    field.classList.remove('border-red-500');
                    
                    // Hide error message if exists
                    const errorMessage = field.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.classList.add('hidden');
                    }
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('border-red-500');
                    
                    // Add or show error message
                    let errorMessage = emailField.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        errorMessage = document.createElement('p');
                        errorMessage.className = 'text-red-500 text-sm mt-1 error-message';
                        errorMessage.textContent = 'Please enter a valid email address';
                        emailField.parentNode.appendChild(errorMessage);
                    } else {
                        errorMessage.classList.remove('hidden');
                        errorMessage.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
        
        // Real-time validation feedback
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.hasAttribute('required') && this.value.trim()) {
                    this.classList.remove('border-red-500');
                    
                    // Hide error message if exists
                    const errorMessage = this.parentNode.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.classList.add('hidden');
                    }
                }
                
                // Email validation
                if (this.type === 'email' && this.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailPattern.test(this.value.trim())) {
                        this.classList.remove('border-red-500');
                        
                        // Hide error message if exists
                        const errorMessage = this.parentNode.querySelector('.error-message');
                        if (errorMessage) {
                            errorMessage.classList.add('hidden');
                        }
                    }
                }
            });
        });
    }
});

// Ensure images load with fade-in effect
window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('animate-fadeIn');
    });
});

// Enhance accessibility
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});
