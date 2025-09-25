// Mobile Navigation Toggle
const navHamburger = document.getElementById('nav-hamburger');
const navMenu = document.getElementById('nav-menu');

navHamburger.addEventListener('click', () => {
    navHamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navHamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Dynamic Typing Animation

// Typing Animation (No width change, no layout shift)
const typingText = document.getElementById('typing-text');
const words = ['Data', 'Ideas', 'Websites', 'Solutions', 'Innovation'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
        typingText.textContent = currentWord.substring(0, charIndex);
    } else {
        charIndex++;
        typingText.textContent = currentWord.substring(0, charIndex);
    }
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeText, 1200);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, 400);
    } else {
        setTimeout(typeText, isDeleting ? 60 : 120);
    }
}
window.addEventListener('load', () => {
    setTimeout(typeText, 800);
});

// Enhanced Tilt Effect for Service Cards
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Particle Background Effect
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 215, 0, 0.3);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 5}s infinite linear;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Add particle float animation to CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(100vh) scale(0); }
        10% { transform: translateY(90vh) scale(1); }
        90% { transform: translateY(-10vh) scale(1); }
        100% { transform: translateY(-20vh) scale(0); }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
createParticles();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling without reCAPTCHA
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form data
    const formData = new FormData(contactForm);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    // Simple form validation
    if (!data.name || !data.email || !data.message || !data.service) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    // Get the submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    // Submit form
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Hide the form
            contactForm.style.display = 'none';
            // Show a form submitted message
            const formContainer = contactForm.parentElement;
            const submittedMsg = document.createElement('div');
            submittedMsg.className = 'form-submitted-message';
            submittedMsg.style.cssText = 'padding:2rem;text-align:center;font-size:1.3rem;color:#27ae60;background:#f6fff7;border-radius:10px;margin-top:1rem;';
            submittedMsg.innerHTML = '<i class="fas fa-check-circle" style="font-size:2rem;color:#27ae60;"></i><br>Thank you for your message! We will get back to you soon.';
            formContainer.appendChild(submittedMsg);
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again or email us directly at info@inverraholding.com', 'error');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        word-wrap: break-word;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Add fade-in animation to portfolio items
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(item);
});

// Counter animation for stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + '+';
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 20);
};

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat h3');
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Animate bars in hero section
window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animation = `growUp 1.5s ease-in-out`;
        }, index * 200);
    });
});


// Parallax effect removed to prevent layout fluctuation

// Tech stack hover animation
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loaded class for potential CSS animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('dom-loaded');
    }, 100);
});
