import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ isDark, activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certifications', id: 'certifications' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900 shadow-lg shadow-black/50'
            : 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : isDark
            ? 'bg-black border-b border-zinc-900'
            : 'bg-white border-b border-neutral-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Custom Monogram Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center space-x-2.5 transition-transform duration-200 hover:scale-105"
              aria-label="Kunal Home"
            >
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-0.5 border transition-all ${
                isDark ? 'bg-white border-zinc-700 shadow-md shadow-black/40' : 'bg-white border-neutral-300 shadow-xs'
              }`}>
                <img
                  src="/logo.png"
                  alt="Kunal Logo"
                  className="w-full h-full object-contain select-none rounded-full"
                />
              </div>
              <span
                className={`text-lg sm:text-xl font-black tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                KUNAL
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white font-extrabold'
                        : 'text-black font-extrabold'
                      : isDark
                        ? 'text-zinc-400 hover:text-white'
                        : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full transition-all duration-300 ${
                        isDark ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-black'
                      }`}
                    />
                  )}
                </a>
              );
            })}

            {/* View Resume Trigger Button */}
            <div className="pl-3 ml-2 border-l border-neutral-300 dark:border-zinc-800">
              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm focus:outline-none ${
                  isDark
                    ? 'bg-white hover:bg-zinc-200 text-black shadow-white/5'
                    : 'bg-black hover:bg-neutral-800 text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                isDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800'
                  : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-1 animate-fadeIn shadow-xl ${
            isDark ? 'bg-black border-zinc-900 text-white' : 'bg-white border-neutral-200 text-black'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive
                    ? isDark
                      ? 'bg-zinc-900 text-white border border-zinc-800'
                      : 'bg-neutral-100 text-black font-extrabold'
                    : isDark
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                      : 'text-neutral-700 hover:text-black hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
