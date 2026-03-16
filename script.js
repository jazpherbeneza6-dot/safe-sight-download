document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-text, .feature-card, .glass-card');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', revealOnScroll);

    // Dynamic dashboard rotation based on mouse
    const dashboard = document.querySelector('.dashboard-mockup');
    const hero = document.querySelector('.hero');

    if (hero && dashboard) {
        hero.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            dashboard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            dashboard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            dashboard.style.transition = 'all 0.5s ease';
        });

        hero.addEventListener('mouseenter', () => {
            dashboard.style.transition = 'none';
        });
    }
});

function scrollToDownload() {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

function downloadApp() {
    const downloadUrl = "https://download1077.mediafire.com/tcoxddinnfzgKE4xRL0XJhGcqz3E1JsE6gAg8DLnQxwXQaguIeB_xCbJiHxTKk8nZBKAgmOU8047ev8MJkyzC4yOKSK7Fz3KiybyOFraeG3RXXbPDb7bYWvQf4waw7U0xE39ounXD12ORn9870-coD_iDjvBXkpZ4QyE2qKAJsdQAdQ/ezzyht3wuxjytfx/Safe-sightV8.apk";
    
    // Redirect directly to the actual download link
    window.location.href = downloadUrl;
}
