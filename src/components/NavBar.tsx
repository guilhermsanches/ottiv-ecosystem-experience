
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

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
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 shadow-md backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="ottiv-container flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <span className="text-2xl font-bold text-ottiv-navy group-hover:scale-105 transition-transform duration-300">
            <span className="text-ottiv-blue glow-text-sm">O</span>TTIV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#lab" className="nav-link text-ottiv-navy hover:text-ottiv-blue transition-colors relative">
            {t('nav.lab')}
          </a>
          <a href="#crew" className="nav-link text-ottiv-navy hover:text-ottiv-blue transition-colors relative">
            {t('nav.crew')}
          </a>
          <a href="#data" className="nav-link text-ottiv-navy hover:text-ottiv-blue transition-colors relative">
            {t('nav.data')}
          </a>
          <a href="#flow" className="nav-link text-ottiv-navy hover:text-ottiv-blue transition-colors relative">
            {t('nav.flow')}
          </a>
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-ottiv-navy hover:text-ottiv-blue transition-colors px-2 py-1 rounded-md">
              <Globe size={20} className="mr-1" />
              <span className="text-sm font-medium">{i18n.language === 'pt' ? 'PT' : 'ES'}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24 p-1">
              <DropdownMenuItem 
                className={`flex items-center px-3 py-2 text-sm cursor-pointer ${i18n.language === 'pt' ? 'bg-ottiv-light/50' : ''}`} 
                onClick={() => changeLanguage('pt')}
              >
                <span className="mr-2">🇧🇷</span> Português
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`flex items-center px-3 py-2 text-sm cursor-pointer ${i18n.language === 'es' ? 'bg-ottiv-light/50' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="#contact" className="btn-primary with-glow">
            {t('nav.getStarted')}
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-ottiv-navy p-1">
              <Globe size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24 p-1">
              <DropdownMenuItem 
                className={`flex items-center px-3 py-2 text-sm cursor-pointer ${i18n.language === 'pt' ? 'bg-ottiv-light/50' : ''}`} 
                onClick={() => changeLanguage('pt')}
              >
                <span className="mr-2">🇧🇷</span> PT
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={`flex items-center px-3 py-2 text-sm cursor-pointer ${i18n.language === 'es' ? 'bg-ottiv-light/50' : ''}`}
                onClick={() => changeLanguage('es')}
              >
                <span className="mr-2">🇪🇸</span> ES
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="text-ottiv-navy" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} className="transition-transform hover:rotate-90 duration-300" /> : <Menu size={24} className="transition-transform hover:rotate-12 duration-300" />}
          </button>
        </div>
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
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors relative nav-link"
            onClick={toggleMenu}
          >
            {t('nav.lab')}
          </a>
          <a 
            href="#crew" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors relative nav-link"
            onClick={toggleMenu}
          >
            {t('nav.crew')}
          </a>
          <a 
            href="#data" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors relative nav-link"
            onClick={toggleMenu}
          >
            {t('nav.data')}
          </a>
          <a 
            href="#flow" 
            className="text-xl font-medium text-ottiv-navy hover:text-ottiv-blue transition-colors relative nav-link"
            onClick={toggleMenu}
          >
            {t('nav.flow')}
          </a>
          <a 
            href="#contact" 
            className="btn-primary w-full text-center with-glow"
            onClick={toggleMenu}
          >
            {t('nav.getStarted')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
