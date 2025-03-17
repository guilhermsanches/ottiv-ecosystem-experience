
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 shadow-md backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="ottiv-container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-ottiv-navy">
            <span className="text-ottiv-blue">O</span>TTIV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#lab" className="text-ottiv-navy hover:text-ottiv-blue transition-colors">
            OTTIV LAB
          </a>
          <a href="#crew" className="text-ottiv-navy hover:text-ottiv-blue transition-colors">
            OTTIV CREW
          </a>
          <a href="#data" className="text-ottiv-navy hover:text-ottiv-blue transition-colors">
            OTTIV DATA
          </a>
          <a href="#flow" className="text-ottiv-navy hover:text-ottiv-blue transition-colors">
            OTTIV FLOW
          </a>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-ottiv-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <a 
            href="#lab" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors"
            onClick={toggleMenu}
          >
            OTTIV LAB
          </a>
          <a 
            href="#crew" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors"
            onClick={toggleMenu}
          >
            OTTIV CREW
          </a>
          <a 
            href="#data" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors"
            onClick={toggleMenu}
          >
            OTTIV DATA
          </a>
          <a 
            href="#flow" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors"
            onClick={toggleMenu}
          >
            OTTIV FLOW
          </a>
          <a 
            href="#contact" 
            className="btn-primary w-full text-center"
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
