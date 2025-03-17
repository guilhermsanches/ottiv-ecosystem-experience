
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

interface EcosystemPillarProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: React.ReactNode;
  features: string[];
  imagePosition: 'left' | 'right';
  bgColor: string;
  delay?: number;
}

const EcosystemPillar: React.FC<EcosystemPillarProps> = ({
  id,
  title,
  subtitle,
  description,
  iconName,
  features,
  imagePosition,
  bgColor,
  delay = 0,
}) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation(); // Add the translation hook
  const isReversed = imagePosition === 'right' && !isMobile;
  
  // Get SVG illustration based on id
  const getSvgIllustration = () => {
    switch(id) {
      case 'lab':
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g fill="none" stroke="#2196F3" strokeWidth="1.5">
              <circle cx="100" cy="100" r="80" opacity="0.2" />
              <circle cx="100" cy="100" r="60" opacity="0.4" />
              <circle cx="100" cy="100" r="40" opacity="0.6" />
              <path d="M100,20 L100,180 M20,100 L180,100 M30,30 L170,170 M170,30 L30,170" opacity="0.3" />
              <path d="M60,60 L120,60 L120,140 L60,140 Z" opacity="0.5" />
              <circle cx="100" cy="100" r="10" fill="#2196F3" opacity="0.8" />
              <path d="M80,140 L120,140 L100,170 Z" fill="#2196F3" opacity="0.8" />
              <path d="M60,60 L80,40 L140,40 L120,60" opacity="0.5" />
            </g>
          </svg>
        );
      case 'crew':
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g fill="none" stroke="#0D1B2A" strokeWidth="1.5">
              <circle cx="70" cy="80" r="20" opacity="0.6" />
              <circle cx="130" cy="80" r="20" opacity="0.6" />
              <circle cx="100" cy="130" r="20" opacity="0.6" />
              <path d="M70,100 L70,150 M130,100 L130,150 M100,150 L100,180" opacity="0.4" />
              <path d="M85,60 L115,60 C125,60 130,70 120,80 C110,90 90,90 80,80 C70,70 75,60 85,60Z" opacity="0.3" />
              <circle cx="70" cy="75" r="5" fill="#0D1B2A" opacity="0.8" />
              <circle cx="130" cy="75" r="5" fill="#0D1B2A" opacity="0.8" />
              <path d="M90,90 C90,90 95,100 100,100 C105,100 110,90 110,90" opacity="0.5" />
              <path d="M30,120 C40,140 60,160 100,160 C140,160 160,140 170,120" opacity="0.3" />
            </g>
          </svg>
        );
      case 'data':
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g fill="none" stroke="#00E676" strokeWidth="1.5">
              <rect x="40" y="40" width="120" height="120" rx="10" opacity="0.2" />
              <path d="M40,70 L160,70 M40,110 L160,110 M40,150 L160,150" opacity="0.4" />
              <path d="M70,40 L70,160 M110,40 L110,160 M150,40 L150,160" opacity="0.4" />
              <circle cx="70" cy="70" r="10" fill="#00E676" opacity="0.6" />
              <circle cx="110" cy="110" r="15" fill="#00E676" opacity="0.6" />
              <circle cx="150" cy="150" r="5" fill="#00E676" opacity="0.6" />
              <path d="M40,120 L70,100 L100,130 L130,80 L160,60" stroke="#00E676" strokeWidth="2" opacity="0.8" />
            </g>
          </svg>
        );
      case 'flow':
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g fill="none" stroke="#90A4AE" strokeWidth="1.5">
              <circle cx="50" cy="50" r="20" opacity="0.6" />
              <circle cx="150" cy="50" r="20" opacity="0.6" />
              <circle cx="50" cy="150" r="20" opacity="0.6" />
              <circle cx="150" cy="150" r="20" opacity="0.6" />
              <path d="M70,50 L130,50 M50,70 L50,130 M150,70 L150,130 M70,150 L130,150" opacity="0.4" />
              <path d="M70,70 L130,130 M130,70 L70,130" opacity="0.3" />
              <circle cx="100" cy="100" r="30" opacity="0.5" />
              <path d="M85,85 L115,115 M115,85 L85,115" stroke="#90A4AE" strokeWidth="2" opacity="0.8" />
              <circle cx="100" cy="100" r="10" fill="#90A4AE" opacity="0.8" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <section id={id} className={`py-16 sm:py-20 ${bgColor}`}>
      <div className="ottiv-container">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
          {/* Content Column */}
          <div className="w-full lg:w-1/2 animate-on-scroll px-4 sm:px-6" style={{ transitionDelay: `${delay * 0.1}s` }}>
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/50 backdrop-blur-sm mb-4 sm:mb-6">
              {iconName}
              <span className="ml-2 text-ottiv-blue font-medium">{subtitle}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-ottiv-gray">
              {description}
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-on-scroll"
                  style={{ transitionDelay: `${(delay + 0.1 + index * 0.1)}s` }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-ottiv-green mt-0.5 mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="btn-primary animate-on-scroll"
              style={{ transitionDelay: `${(delay + 0.5)}s` }}
            >
              {t('ecosystemPillars.learnMore')}
            </a>
          </div>
          
          {/* SVG Illustration Column */}
          <div className="w-full lg:w-1/2 animate-on-scroll px-4 sm:px-6" style={{ transitionDelay: `${(delay + 0.2)}s` }}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className={`aspect-w-16 aspect-h-9 bg-gradient-to-br ${
                id === 'lab' ? 'from-ottiv-blue/20 to-ottiv-blue/5' :
                id === 'crew' ? 'from-ottiv-navy/20 to-ottiv-navy/5' :
                id === 'data' ? 'from-ottiv-green/20 to-ottiv-green/5' :
                'from-ottiv-gray/20 to-ottiv-gray/5'
              } p-6 sm:p-8 flex items-center justify-center`}>
                {getSvgIllustration()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPillar;

