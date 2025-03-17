
export const observeElements = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, 100);
};

export const initParallax = () => {
  window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const distance = window.scrollY;
      const speed = Number(element.getAttribute('data-speed')) || 0.5;
      
      if (element instanceof HTMLElement) {
        element.style.transform = `translateY(${distance * speed}px)`;
      }
    });
  });
};

// Enhanced animations
export const initHoverEffects = () => {
  // Button hover effects
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll('.pillar-card, .story-item');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      }
    });
    card.addEventListener('mouseleave', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }
    });
  });

  // Link hover effects
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.classList.add('link-hover-effect');
      }
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  observeElements();
  initParallax();
  initHoverEffects();
};
