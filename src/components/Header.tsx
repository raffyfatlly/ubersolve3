import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-lighter/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Bot className="text-primary animate-float" size={32} />
            <span className="text-xl font-extrabold tracking-tight">agentif<span className="text-primary">.co</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">About</a>
            <a href="https://wa.link/f0ui3h" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-300 hover:text-white hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex">
            <a 
              href="https://wa.link/f0ui3h" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-glow hover:shadow-none"
            >
              Get Started
            </a>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a href="#features" className="font-medium text-gray-300 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="font-medium text-gray-300 hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="font-medium text-gray-300 hover:text-primary transition-colors">About</a>
              <a href="https://wa.link/f0ui3h" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-300 hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-800">
                <a 
                  href="https://wa.link/f0ui3h" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold text-center shadow-glow"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}