
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

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
  const { t } = useTranslation();
  const isReversed = imagePosition === 'right' && !isMobile;
  
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
          
          {/* Card Column - Replacing SVG Illustrations */}
          <div className="w-full lg:w-1/2 animate-on-scroll px-4 sm:px-6" style={{ transitionDelay: `${(delay + 0.2)}s` }}>
            <Card className={`pillar-card border-0 shadow-lg overflow-hidden ${
              id === 'lab' ? 'bg-gradient-to-br from-ottiv-blue/10 to-white' :
              id === 'crew' ? 'bg-gradient-to-br from-ottiv-navy/10 to-white' :
              id === 'data' ? 'bg-gradient-to-br from-ottiv-green/10 to-white' :
              'bg-gradient-to-br from-ottiv-gray/10 to-white'
            }`}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full ${
                    id === 'lab' ? 'bg-ottiv-blue/20' :
                    id === 'crew' ? 'bg-ottiv-navy/20' :
                    id === 'data' ? 'bg-ottiv-green/20' :
                    'bg-ottiv-gray/20'
                  }`}>
                    <div className="w-8 h-8 text-ottiv-blue">
                      {iconName}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                  
                  <div className={`w-12 h-1 mb-4 ${
                    id === 'lab' ? 'bg-ottiv-blue' :
                    id === 'crew' ? 'bg-ottiv-navy' :
                    id === 'data' ? 'bg-ottiv-green' :
                    'bg-ottiv-gray'
                  }`}></div>
                  
                  <p className="text-center text-ottiv-gray">{subtitle}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPillar;
