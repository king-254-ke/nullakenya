// Basic JavaScript functionality for the MultiShop website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('mobile-nav-open');
        });
    }
    
    // Product wishlist functionality
    const wishlistBtns = document.querySelectorAll('.product-wishlist');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            
            // Simple visual feedback
            const icon = this.querySelector('svg');
            if (this.classList.contains('active')) {
                icon.setAttribute('fill', 'currentColor');
            } else {
                icon.setAttribute('fill', 'none');
            }
        });
    });
    
    // Quick add to cart functionality
    const quickAddBtns = document.querySelectorAll('.product-quick-add');
    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple cart counter update
            const cartBadge = document.querySelector('.cart-badge');
            if (cartBadge) {
                let currentCount = parseInt(cartBadge.textContent) || 0;
                cartBadge.textContent = currentCount + 1;
            }
            
            // Visual feedback
            this.textContent = 'Added!';
            setTimeout(() => {
                this.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                    </svg>
                    Quick Add
                `;
            }, 1500);
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('.newsletter-input');
        const btn = newsletterForm.querySelector('.newsletter-btn');
        
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (input.value && input.value.includes('@')) {
                this.textContent = 'SUBSCRIBED!';
                input.value = '';
                
                setTimeout(() => {
                    this.textContent = 'SUBSCRIBE';
                }, 2000);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Simple animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to cards
    const cards = document.querySelectorAll('.product-card, .feature-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Simple alert for demo purposes
            alert('Cart functionality would be implemented here!');
        });
    }
    
    // User button functionality
    const userBtn = document.querySelector('.user-btn');
    if (userBtn) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Simple alert for demo purposes
            alert('User login/profile functionality would be implemented here!');
        });
    }
});

// Additional mobile navigation styles (injected via JavaScript)
const style = document.createElement('style');
style.textContent = `
    .mobile-nav-open {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: hsl(var(--background));
        border: 1px solid hsl(var(--border));
        border-top: none;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-nav-open .nav-link {
        padding: 0.75rem 0;
        border-bottom: 1px solid hsl(var(--border));
    }
    
    .mobile-nav-open .nav-link:last-child {
        border-bottom: none;
    }
    
    @media (min-width: 768px) {
        .mobile-nav-open {
            position: static !important;
            flex-direction: row !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
        }
        
        .mobile-nav-open .nav-link {
            padding: 0 !important;
            border-bottom: none !important;
        }
    }
`;
document.head.appendChild(style);