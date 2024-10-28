import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Terminal className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-2xl font-bold text-white font-poppins group-hover:text-blue-300 transition-colors">
              MJ
            </span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 glass-effect p-4 shadow-lg md:relative md:shadow-none md:p-0' : 'hidden md:flex'}`}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <a 
              href="mailto:jezanarm@gmail.com"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="block md:inline-block py-2 md:py-0 text-gray-300 hover:text-white transition-colors font-medium"
  >
    {children}
  </a>
);

export default NavBar;