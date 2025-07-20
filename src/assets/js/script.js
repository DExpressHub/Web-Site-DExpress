document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Tab functionality for benefits section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Modal functionality
    const modal = document.getElementById('loginModal');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalPanels = document.querySelectorAll('.tab-panel');
    
    // Function to open modal with specific tab
    function openModal(userType) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set the correct title based on user type
        const modalTitle = document.getElementById('modalTitle');
        const registerTitle = document.getElementById('registerTitle');
        
        if (userType === 'empregada') {
            modalTitle.textContent = 'Faça login como Profissional';
            registerTitle.textContent = 'Cadastre-se como Profissional';
        } else {
            modalTitle.textContent = 'Faça login como Família';
            registerTitle.textContent = 'Cadastre-se como Família';
        }
    }
    
    // Event listeners for all buttons that open modal
    document.getElementById('loginEmpregadaBtn').addEventListener('click', () => openModal('empregada'));
    document.getElementById('loginPatraoBtn').addEventListener('click', () => openModal('patrao'));
    document.getElementById('ctaEmpregadaBtn').addEventListener('click', () => openModal('empregada'));
    document.getElementById('ctaPatraoBtn').addEventListener('click', () => openModal('patrao'));
    document.getElementById('finalCtaEmpregadaBtn').addEventListener('click', () => openModal('empregada'));
    document.getElementById('finalCtaPatraoBtn').addEventListener('click', () => openModal('patrao'));
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Modal tab switching
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            modalTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel
            modalPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `${tabId}-panel`) {
                    panel.classList.add('active');
                }
            });
        });
    });
    
    // Form submission
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would add your login logic
        alert('Login functionality would be implemented here');
    });
    
    document.getElementById('registerForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would add your registration logic
        alert('Registration functionality would be implemented here');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes when elements come into view
    const animateElements = document.querySelectorAll('.step, .benefit-card, .testimonial');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach((element, index) => {
        // Add delay classes for staggered animation
        if (index % 4 === 1) element.classList.add('delay-1');
        if (index % 4 === 2) element.classList.add('delay-2');
        if (index % 4 === 3) element.classList.add('delay-3');
        
        observer.observe(element);
    });
    
    // Hero image hover effect
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateY(0deg)';
        });
        
        heroImage.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(-10deg)';
        });
    }
});