
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced Background with animated gradient and SVG shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ottiv-light to-white bg-gradient-animate opacity-70 z-0"></div>
      
      {/* SVG Background Elements instead of simple divs */}
      <svg className="absolute top-20 right-10 w-64 h-64 animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(33, 150, 243, 0.05)" d="M45.7,-50.2C60.8,-34.4,75.5,-17.2,77.4,2.4C79.2,22,68.3,44.1,53.2,55.5C38.1,66.9,19.1,67.6,-0.5,68.1C-20,68.7,-40,69,-53.1,58.3C-66.3,47.5,-72.5,25.8,-70.6,5.5C-68.6,-14.8,-58.4,-29.5,-45.4,-45.3C-32.3,-61.1,-16.2,-77.9,0.5,-78.4C17.2,-78.9,34.3,-63.2,45.7,-50.2Z" transform="translate(100 100)" />
      </svg>
      
      <svg className="absolute bottom-20 left-10 w-48 h-48 animate-pulse-light" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(0, 230, 118, 0.05)" d="M48.6,-46.4C63.5,-29.7,76.4,-14.9,77.8,1.5C79.2,17.8,69.1,35.7,54.2,48.4C39.3,61.2,19.6,68.8,0.4,68.5C-18.9,68.2,-37.8,59.9,-51.3,46.3C-64.9,32.6,-73.1,13.3,-70.8,-3.3C-68.4,-19.9,-55.5,-33.7,-41.5,-50.3C-27.5,-66.9,-13.8,-86.3,0.5,-86.7C14.7,-87.2,29.4,-68.9,48.6,-46.4Z" transform="translate(100 100)" />
      </svg>
      
      <svg className="absolute top-1/3 left-1/4 w-32 h-32 animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ animationDelay: '2s' }}>
        <path fill="rgba(13, 27, 42, 0.05)" d="M43.3,-53.6C58.4,-39.8,74.4,-27.9,79.8,-12.1C85.2,3.8,80,22.6,69.4,36.9C58.8,51.1,42.8,60.8,26.4,65.6C10,70.3,-6.7,70.2,-23.6,66.1C-40.5,62,-57.6,54,-67.1,40.1C-76.6,26.2,-78.6,6.4,-73.8,-10.8C-69,-28.1,-57.5,-42.7,-43.5,-56.5C-29.6,-70.3,-14.8,-83.2,0,-83.2C14.8,-83.2,29.5,-63.2,43.3,-53.6Z" transform="translate(100 100)" />
      </svg>
      
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
