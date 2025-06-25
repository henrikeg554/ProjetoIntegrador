document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.step, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.step, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
    
    const stats = document.querySelectorAll('.stat h3');
    const speed = 200;
    
    if (stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach(stat => {
                        const target = +stat.innerText.replace('+', '');
                        const increment = target / speed;
                        let current = 0;
                        
                        const updateCount = () => {
                            current += increment;
                            if (current < target) {
                                stat.innerText = '+' + Math.floor(current);
                                setTimeout(updateCount, 1);
                            } else {
                                stat.innerText = '+' + target;
                            }
                        };
                        
                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.impact-stats'));
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const error = urlParams.get('error');
    
    if (success || error) {
        const message = document.createElement('div');
        message.className = `global-message ${success ? 'success' : 'error'}`;
        message.textContent = success || error;
        document.body.prepend(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 5000);
    }
});

const style = document.createElement('style');
style.textContent = `
.global-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    border-radius: var(--border-radius);
    color: white;
    font-weight: 600;
    box-shadow: var(--box-shadow);
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.5s ease;
}
.global-message.success {
    background-color: var(--success-color);
}
.global-message.error {
    background-color: var(--error-color);
}
`;
document.head.appendChild(style);