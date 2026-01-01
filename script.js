// Smooth Scrolling for Navigation Links
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

// Navbar Background Change on Scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Typewriter Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('load', () => {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typeWriter(typewriterElement, text, 150);
    }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const elementsToObserve = document.querySelectorAll('.project-card, .skill-category, .contact-card, .story-content');
    
    elementsToObserve.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Project Cards Hover Effect - Add subtle parallax
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add reading progress bar
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #3498db);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add cursor trail effect for storytelling theme
let dots = [];
const MAX_DOTS = 15;

document.addEventListener('mousemove', (e) => {
    // Create dot element
    const dot = document.createElement('div');
    dot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(102, 126, 234, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transition: opacity 1s ease;
    `;
    
    document.body.appendChild(dot);
    dots.push(dot);
    
    // Fade out and remove
    setTimeout(() => {
        dot.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        dot.remove();
        dots.shift();
    }, 1000);
    
    // Limit number of dots
    if (dots.length > MAX_DOTS) {
        const oldDot = dots.shift();
        oldDot.remove();
    }
});

// Parallax effect for hero section
const heroSection = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - (scrolled / 700);
    }
});

// Add story page flip effect when scrolling between sections
let currentSection = 0;
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (currentSection !== index) {
                currentSection = index;
                // Add animation class
                section.style.animation = 'fadeInUp 0.8s ease';
            }
        }
    });
});

// Add quote animations
const quotes = document.querySelectorAll('.story-quote');
quotes.forEach(quote => {
    quote.classList.add('fade-in');
    observer.observe(quote);
});

// Mobile menu toggle (basic implementation)
// Note: For production use, add a proper hamburger button in the HTML
const createMobileMenuToggle = () => {
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Add mobile menu button if it doesn't exist
        let menuButton = document.querySelector('.mobile-menu-btn');
        if (!menuButton) {
            menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-btn';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--primary-color);
            `;
            menuButton.setAttribute('aria-label', 'Toggle navigation menu');
            menuButton.addEventListener('click', () => {
                const isVisible = navMenu.style.display === 'flex';
                navMenu.style.display = isVisible ? 'none' : 'flex';
                menuButton.setAttribute('aria-expanded', !isVisible);
            });
            navContainer.appendChild(menuButton);
        }
    }
};

window.addEventListener('resize', createMobileMenuToggle);
createMobileMenuToggle();

// Add smooth transitions to all links
document.querySelectorAll('a').forEach(link => {
    link.style.transition = 'all 0.3s ease';
});

// Console easter egg for developers
console.log('%c📖 Welcome to My Story!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cEvery great story deserves to be told in code.', 'font-size: 14px; font-style: italic; color: #764ba2;');
console.log('%cThanks for inspecting! 🕵️', 'font-size: 12px; color: #666;');

// Add loading animation - ensure smooth fade-in
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});
