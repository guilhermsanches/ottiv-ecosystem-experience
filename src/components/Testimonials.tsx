
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    content: "OTTIV has revolutionized how we approach data analysis. Their AI solutions have increased our efficiency by 300% and provided insights we never thought possible."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Operations",
    company: "Innovate Inc",
    content: "The OTTIV ecosystem seamlessly integrated with our existing infrastructure. It's now the backbone of our digital transformation strategy."
  },
  {
    id: 3,
    name: "Alicia Rodriguez",
    role: "CEO",
    company: "Future Solutions",
    content: "Working with OTTIV has been transformative. Their team understood our unique challenges and delivered a tailored solution that exceeded all expectations."
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-ottiv-navy text-white">
      <div className="ottiv-container">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            Success Stories
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover how OTTIV has transformed businesses across industries with innovative digital solutions.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto animate-on-scroll">
          <div 
            className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
              <svg 
                className="absolute top-8 left-8 w-16 h-16 text-ottiv-blue/20 -z-0" 
                fill="currentColor" 
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  {testimonials[activeIndex].content}
                </p>
                <footer className="flex items-center">
                  <div className="mr-4 bg-ottiv-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-medium text-white not-italic">
                      {testimonials[activeIndex].name}
                    </cite>
                    <p className="text-white/70">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-ottiv-blue w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
