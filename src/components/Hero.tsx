
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const headline = headlineRef.current;
    const description = descriptionRef.current;
    const cta = ctaRef.current;

    // Fix for visibility bug: Ensure elements are visible on mount
    if (headline) headline.style.opacity = '0';
    if (description) description.style.opacity = '0';
    if (cta) cta.style.opacity = '0';

    // Delayed animation to ensure elements are rendered first
    setTimeout(() => {
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
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Animation with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ottiv-light to-white bg-gradient-animate opacity-70 z-0"></div>
      
      {/* Animated Shapes with improved animations */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-ottiv-blue/5 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-ottiv-green/5 animate-pulse-light"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-ottiv-navy/5 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="ottiv-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-ottiv-blue/10 text-ottiv-blue text-sm font-medium mb-6 transform transition-transform duration-300 hover:scale-105">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight glow-text"
          >
            {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-lg sm:text-xl text-ottiv-gray max-w-3xl mx-auto mb-10"
          >
            {t('hero.description')}
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contact" 
              className="btn-primary group with-glow"
            >
              <span>{t('hero.primaryCta')}</span>
              <svg 
                className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#lab" 
              className="btn-secondary with-hover-border"
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
