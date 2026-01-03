// Generate twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const stars2Container = document.getElementById('stars2');
    const stars3Container = document.getElementById('stars3');
    
    // Create small stars (layer 1)
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 2;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 3;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
            animation: twinkle ${duration}s infinite ${delay}s;
        `;
        
        starsContainer.appendChild(star);
    }
    
    // Create medium stars (layer 2)
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 2;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 4;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #6366f1;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 ${size * 3}px rgba(99, 102, 241, 0.8);
            animation: twinkle ${duration}s infinite ${delay}s;
        `;
        
        stars2Container.appendChild(star);
    }
    
    // Create large stars (layer 3)
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 2;
        const duration = 4 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #8b5cf6;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 ${size * 4}px rgba(139, 92, 246, 0.8);
            animation: twinkle ${duration}s infinite ${delay}s;
        `;
        
        stars3Container.appendChild(star);
    }
}

// Add CSS for twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.2;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);

// Initialize stars when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createStars);
} else {
    createStars();
}

// Smooth scroll for navigation
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

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
