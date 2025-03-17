
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import EcosystemPillar from '../components/EcosystemPillar';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { initAllAnimations } from '../lib/animations';
import { Beaker, Users, Database, PackageCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize all enhanced animations when component mounts
    initAllAnimations();
    
    // Re-initialize on window resize
    window.addEventListener('resize', initAllAnimations);
    
    return () => {
      window.removeEventListener('resize', initAllAnimations);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      
      <main>
        <Hero />
        
        <EcosystemPillar 
          id="lab"
          title={t('ecosystemPillars.lab.title')}
          subtitle={t('ecosystemPillars.lab.subtitle')}
          description={t('ecosystemPillars.lab.description')}
          iconName={<Beaker className="w-5 h-5 text-ottiv-blue" />}
          features={[
            t('ecosystemPillars.lab.feature1', 'AI-driven data analysis and predictive modeling'),
            t('ecosystemPillars.lab.feature2', 'Customizable machine learning algorithms'),
            t('ecosystemPillars.lab.feature3', 'Rapid prototyping and testing environment'),
            t('ecosystemPillars.lab.feature4', 'Integration with existing business systems')
          ]}
          imagePosition="right"
          bgColor="bg-white"
          delay={0}
        />
        
        <EcosystemPillar 
          id="crew"
          title={t('ecosystemPillars.crew.title')}
          subtitle={t('ecosystemPillars.crew.subtitle')}
          description={t('ecosystemPillars.crew.description')}
          iconName={<Users className="w-5 h-5 text-ottiv-blue" />}
          features={[
            t('ecosystemPillars.crew.feature1', 'Access to a network of industry specialists'),
            t('ecosystemPillars.crew.feature2', 'Collaborative project development'),
            t('ecosystemPillars.crew.feature3', 'Knowledge sharing and best practices'),
            t('ecosystemPillars.crew.feature4', 'Ongoing support and mentorship')
          ]}
          imagePosition="left"
          bgColor="bg-ottiv-light"
          delay={0.1}
        />
        
        <Testimonials />
        
        <EcosystemPillar 
          id="data"
          title={t('ecosystemPillars.data.title')}
          subtitle={t('ecosystemPillars.data.subtitle')}
          description={t('ecosystemPillars.data.description')}
          iconName={<Database className="w-5 h-5 text-ottiv-blue" />}
          features={[
            t('ecosystemPillars.data.feature1', 'Real-time data processing and analysis'),
            t('ecosystemPillars.data.feature2', 'Interactive visualization dashboards'),
            t('ecosystemPillars.data.feature3', 'Predictive analytics and trend forecasting'),
            t('ecosystemPillars.data.feature4', 'Secure data storage and management')
          ]}
          imagePosition="right"
          bgColor="bg-white"
          delay={0.2}
        />
        
        <EcosystemPillar 
          id="flow"
          title={t('ecosystemPillars.flow.title')}
          subtitle={t('ecosystemPillars.flow.subtitle')}
          description={t('ecosystemPillars.flow.description')}
          iconName={<PackageCheck className="w-5 h-5 text-ottiv-blue" />}
          features={[
            t('ecosystemPillars.flow.feature1', 'Automated workflow management'),
            t('ecosystemPillars.flow.feature2', 'Process optimization and efficiency tools'),
            t('ecosystemPillars.flow.feature3', 'Custom integration with existing systems'),
            t('ecosystemPillars.flow.feature4', 'Real-time performance monitoring')
          ]}
          imagePosition="left"
          bgColor="bg-ottiv-light"
          delay={0.3}
        />
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
