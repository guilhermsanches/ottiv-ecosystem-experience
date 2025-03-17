
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
