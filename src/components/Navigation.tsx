import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl text-[#028383]">4um</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('what-is')}
              className="text-gray-700 hover:text-[#028383] transition-colors"
            >
              What is 4um
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-gray-700 hover:text-[#028383] transition-colors"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-gray-700 hover:text-[#028383] transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="text-gray-700 hover:text-[#028383] transition-colors"
            >
              Insights
            </button>
              <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#028383] transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="bg-[#028383] text-white px-6 py-2.5 rounded-full hover:bg-[#016969] transition-colors"
            >
              Join 4um
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('what-is')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              What is 4um
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full bg-[#028383] text-white px-6 py-2.5 rounded-full hover:bg-[#016969] transition-colors mt-2"
            >
              Join 4um
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}