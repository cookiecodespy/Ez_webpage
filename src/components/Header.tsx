import { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-[#E41B13] p-2 rounded">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">EZ Ship Logistics</span>
              <span className="text-xs text-gray-500">Global Solutions</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              Industries
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              Technology
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#E41B13] font-medium transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#E41B13] text-white px-6 py-2 rounded hover:bg-[#c41610] transition-colors font-medium"
            >
              Request a Quote
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              Industries
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              Technology
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-3 text-gray-700 hover:text-[#E41B13] font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#E41B13] text-white px-6 py-3 rounded hover:bg-[#c41610] transition-colors font-medium mt-2"
            >
              Request a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
