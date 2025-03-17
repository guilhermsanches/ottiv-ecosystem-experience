
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import EcosystemPillar from '../components/EcosystemPillar';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { observeElements, initParallax } from '../lib/animations';
import { Beaker, Users, Database, PackageCheck } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Initialize animations when component mounts
    observeElements();
    initParallax();

    // Re-initialize on window resize
    window.addEventListener('resize', observeElements);
    
    return () => {
      window.removeEventListener('resize', observeElements);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      
      <main>
        <Hero />
        
        <EcosystemPillar 
          id="lab"
          title="LAB"
          subtitle="Innovation & Research"
          description="OTTIV LAB is our cutting-edge research and development hub where we experiment with emerging technologies to create innovative solutions for complex business challenges."
          iconName={<Beaker className="w-5 h-5 text-ottiv-blue" />}
          features={[
            "AI-driven data analysis and predictive modeling",
            "Customizable machine learning algorithms",
            "Rapid prototyping and testing environment",
            "Integration with existing business systems"
          ]}
          imagePosition="right"
          bgColor="bg-white"
          delay={0}
        />
        
        <EcosystemPillar 
          id="crew"
          title="CREW"
          subtitle="Community & Collaboration"
          description="OTTIV CREW connects businesses with expert consultants, developers, and industry leaders to foster collaboration and knowledge sharing within our thriving ecosystem."
          iconName={<Users className="w-5 h-5 text-ottiv-blue" />}
          features={[
            "Access to a network of industry specialists",
            "Collaborative project development",
            "Knowledge sharing and best practices",
            "Ongoing support and mentorship"
          ]}
          imagePosition="left"
          bgColor="bg-ottiv-light"
          delay={0.1}
        />
        
        <Testimonials />
        
        <EcosystemPillar 
          id="data"
          title="DATA"
          subtitle="Analytics & Insights"
          description="OTTIV DATA transforms raw information into actionable business intelligence through advanced analytics, visualization tools, and real-time monitoring systems."
          iconName={<Database className="w-5 h-5 text-ottiv-blue" />}
          features={[
            "Real-time data processing and analysis",
            "Interactive visualization dashboards",
            "Predictive analytics and trend forecasting",
            "Secure data storage and management"
          ]}
          imagePosition="right"
          bgColor="bg-white"
          delay={0.2}
        />
        
        <EcosystemPillar 
          id="flow"
          title="FLOW"
          subtitle="Workflow Optimization"
          description="OTTIV FLOW streamlines business processes through intelligent automation, custom workflow design, and integrated management tools that boost efficiency and productivity."
          iconName={<PackageCheck className="w-5 h-5 text-ottiv-blue" />}
          features={[
            "Automated workflow management",
            "Process optimization and efficiency tools",
            "Custom integration with existing systems",
            "Real-time performance monitoring"
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
