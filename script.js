document.addEventListener('DOMContentLoaded', function() {
    // Initialize icon wall animation
    const iconContainers = document.querySelectorAll('.icon-container');
    iconContainers.forEach(container => {
        const delay = container.getAttribute('data-delay');
        container.style.setProperty('--delay', delay);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const techNav = document.querySelector('.tech-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            techNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.tech-nav a').forEach(link => {
        link.addEventListener('click', () => {
            techNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Testimonial slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show the current slide
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto advance slides every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const interval = Math.floor(duration / target);
                
                const counter = setInterval(() => {
                    count += 1;
                    stat.textContent = count;
                    
                    if (count >= target) {
                        clearInterval(counter);
                    }
                }, interval);
            });
            
            animated = true;
        }
    }

    // Floating contact button
    const floatingBtn = document.querySelector('.floating-btn');
    const contactSection = document.querySelector('#contact');
    
    if (floatingBtn && contactSection) {
        floatingBtn.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Neon text glitch effect on hover
    const neonElements = document.querySelectorAll('.neon-text, .neon-title');
    
    neonElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.animation = 'textFlicker 0.3s linear 2';
        });
        
        element.addEventListener('animationend', () => {
            element.style.animation = '';
        });
    });

    // Order now button functionality
    const orderNowBtn = document.querySelector('.glow-button');
    if (orderNowBtn && contactSection) {
        orderNowBtn.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Learn more button functionality
    const learnMoreBtn = document.querySelector('.outline-button');
    const servicesSection = document.querySelector('#services');
    if (learnMoreBtn && servicesSection) {
        learnMoreBtn.addEventListener('click', () => {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', () => {
        animateStats();
    });

    // Initial check for stats animation
    animateStats();

    // Add text flicker animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes textFlicker {
            0% { text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue); }
            10% { text-shadow: none; }
            20% { text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), 0 0 40px var(--neon-blue); }
            30% { text-shadow: none; }
            40% { text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue); }
            100% { text-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue); }
        }
    `;
    document.head.appendChild(style);
});
