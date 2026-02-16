document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                
                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = Math.ceil(count + inc);
                    // Call function every ms
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    // Trigger animation when Impact section is in view
    let animated = false;
    const impactSection = document.getElementById('impact');
    
    window.addEventListener('scroll', () => {
        if (!animated && window.scrollY + window.innerHeight > impactSection.offsetTop + 100) {
            animateCounters();
            animated = true;
        }
    });

    // Form Submissions (Frontend Simulation)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic Validation Check (already handled by 'required' attribute, but explicit check good practice)
            let isValid = true;
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                // Simulate server request
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Thank you! Your submission has been received.');
                    form.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
