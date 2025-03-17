
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isReversed = imagePosition === 'right' && !isMobile;
  
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="ottiv-container">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Content Column */}
          <div className="w-full lg:w-1/2 animate-on-scroll" style={{ transitionDelay: `${delay * 0.1}s` }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm mb-6">
              {iconName}
              <span className="ml-2 text-ottiv-blue font-medium">{subtitle}</span>
            </div>
            
            <h2 className="section-title">
              {title}
            </h2>
            
            <p className="text-lg mb-8 text-ottiv-gray">
              {description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-on-scroll"
                  style={{ transitionDelay: `${(delay + 0.1 + index * 0.1)}s` }}
                >
                  <svg className="w-6 h-6 text-ottiv-green mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="btn-primary animate-on-scroll"
              style={{ transitionDelay: `${(delay + 0.5)}s` }}
            >
              Learn More
            </a>
          </div>
          
          {/* Image/Visualization Column */}
          <div className="w-full lg:w-1/2 animate-on-scroll" style={{ transitionDelay: `${(delay + 0.2)}s` }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className={`aspect-w-16 aspect-h-9 bg-gradient-to-br ${
                id === 'lab' ? 'from-ottiv-blue/20 to-ottiv-blue/5' :
                id === 'crew' ? 'from-ottiv-navy/20 to-ottiv-navy/5' :
                id === 'data' ? 'from-ottiv-green/20 to-ottiv-green/5' :
                'from-ottiv-gray/20 to-ottiv-gray/5'
              } p-8 flex items-center justify-center`}>
                <div className="text-center glassmorphism p-10 rounded-xl w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold mb-4">OTTIV {title}</h3>
                  <p className="text-ottiv-gray">Interactive visualization would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPillar;
