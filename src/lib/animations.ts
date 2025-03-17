
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

// Enhanced background animations
export const initBackgroundEffects = () => {
  // Create wave effect in the background
  const createWaveEffect = () => {
    const wave = document.createElement('div');
    wave.classList.add('wave-effect');
    
    // Randomize properties
    const size = Math.random() * 100 + 50;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 8 + 12;
    const delay = Math.random() * 5;
    
    // Apply styles
    wave.style.width = `${size}px`;
    wave.style.height = `${size}px`;
    wave.style.left = `${posX}px`;
    wave.style.top = `${posY}px`;
    wave.style.animation = `wave ${duration}s ease-in-out ${delay}s infinite`;
    
    document.body.appendChild(wave);
    
    // Clean up after animation
    setTimeout(() => {
      document.body.removeChild(wave);
    }, (duration + delay) * 1000);
  };
  
  // Create particles in the background
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.classList.add('floating-particle');
    
    // Randomize properties
    const size = Math.random() * 8 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const opacity = Math.random() * 0.3 + 0.1;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.opacity = opacity.toString();
    particle.style.animation = `float ${duration}s ease-in-out infinite`;
    
    document.body.appendChild(particle);
    
    // Clean up after animation
    setTimeout(() => {
      document.body.removeChild(particle);
    }, duration * 1000);
  };
  
  // Add CSS rules for the animations
  const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes wave {
        0%, 100% { transform: scale(1); opacity: 0; }
        50% { transform: scale(1.5); opacity: 0.1; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(5deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(20px) rotate(-5deg); }
      }
      
      .wave-effect {
        position: fixed;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, rgba(0, 230, 118, 0.05) 100%);
        pointer-events: none;
        z-index: -1;
      }
      
      .floating-particle {
        position: fixed;
        border-radius: 50%;
        background-color: rgba(33, 150, 243, 0.2);
        pointer-events: none;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
  };
  
  // Initialize background effects
  addAnimationStyles();
  
  // Create initial set of waves and particles
  for (let i = 0; i < 5; i++) {
    createWaveEffect();
  }
  
  for (let i = 0; i < 15; i++) {
    createParticle();
  }
  
  // Continuously create new waves and particles
  setInterval(() => {
    createWaveEffect();
  }, 5000);
  
  setInterval(() => {
    createParticle();
  }, 2000);
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
  
  // Form field focus effects
  const formFields = document.querySelectorAll('input, textarea');
  formFields.forEach((field) => {
    field.addEventListener('focus', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.parentElement?.classList.add('field-focus');
      }
    });
    field.addEventListener('blur', (e) => {
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.parentElement?.classList.remove('field-focus');
      }
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  observeElements();
  initParallax();
  initHoverEffects();
  initBackgroundEffects();
};
