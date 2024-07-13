document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const navItems = nav.getElementsByTagName('a');

    // Change nav style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Add hover effect to nav items
    Array.from(navItems).forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll to sections
    Array.from(navItems).forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});