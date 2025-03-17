
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Zap, Globe, AtomIcon, Layers, Server, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const headline = headlineRef.current;
    const description = descriptionRef.current;
    const cta = ctaRef.current;

    const animateElements = () => {
      if (headline) {
        headline.style.opacity = '1';
        headline.classList.add('animate-fade-in');
      }

      if (description) {
        setTimeout(() => {
          description.style.opacity = '1';
          description.classList.add('animate-fade-in');
        }, 300);
      }

      if (cta) {
        setTimeout(() => {
          cta.style.opacity = '1';
          cta.classList.add('animate-fade-in');
        }, 600);
      }
    };

    // Fixed visibility bug by ensuring animation starts properly
    setTimeout(animateElements, 100);
    
    // Parallax effect for icons
    const handleMouseMove = (e: MouseEvent) => {
      const icons = document.querySelectorAll('.parallax-icon');
      const icons2 = document.querySelectorAll('.parallax-icon-reverse');
      
      icons.forEach((icon) => {
        const speed = Number(icon.getAttribute('data-speed')) || 0.05;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        if (icon instanceof HTMLElement) {
          icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
      
      icons2.forEach((icon) => {
        const speed = Number(icon.getAttribute('data-speed')) || 0.08;
        const x = (e.pageX * speed) / 100;
        const y = (e.pageY * speed) / 100;
        
        if (icon instanceof HTMLElement) {
          icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced background with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ottiv-light via-ottiv-light to-ottiv-blue/20 opacity-80 z-0"></div>
      
      {/* Parallax Icons */}
      <div className="absolute top-20 right-10 w-10 h-10 text-ottiv-blue/30 parallax-icon" data-speed="0.05">
        <Zap size={40} strokeWidth={1} />
      </div>
      
      <div className="absolute bottom-40 left-20 w-10 h-10 text-ottiv-green/30 parallax-icon" data-speed="0.08">
        <Globe size={48} strokeWidth={1} />
      </div>
      
      <div className="absolute top-40 left-40 w-8 h-8 text-ottiv-navy/30 parallax-icon-reverse" data-speed="0.06">
        <AtomIcon size={32} strokeWidth={1} />
      </div>
      
      <div className="absolute bottom-80 right-40 w-12 h-12 text-ottiv-blue/20 parallax-icon-reverse" data-speed="0.09">
        <Layers size={48} strokeWidth={1} />
      </div>
      
      <div className="absolute top-1/3 right-1/4 w-10 h-10 text-ottiv-green/30 parallax-icon" data-speed="0.07">
        <Server size={40} strokeWidth={1} />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 text-ottiv-navy/30 parallax-icon-reverse" data-speed="0.05">
        <Code size={32} strokeWidth={1} />
      </div>
      
      <div className="ottiv-container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="mb-8 inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-ottiv-blue/10 text-ottiv-blue text-sm font-medium mb-6 transform transition-transform duration-300 hover:scale-105">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight glow-text opacity-0"
          >
            {t('hero.title')} <span className="text-gradient bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl text-ottiv-gray max-w-3xl mx-auto mb-8 sm:mb-10 opacity-0"
          >
            {t('hero.description')}
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <a 
              href="#contact" 
              className="btn-primary group with-glow w-full sm:w-auto"
            >
              <span>{t('hero.primaryCta')}</span>
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#lab" 
              className="btn-secondary with-hover-border w-full sm:w-auto"
            >
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-ottiv-gray text-sm mb-2">{t('hero.scrollText')}</span>
        <svg className="w-6 h-6 text-ottiv-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
