import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandLogos';

export const Footer = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t relative transition-colors duration-300 ${
        isDark
          ? 'bg-black border-zinc-900 text-zinc-300'
          : 'bg-white border-neutral-200 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright Text in Pure B&W */}
          <div className={`text-xs sm:text-sm font-bold text-center sm:text-left ${isDark ? 'text-white' : 'text-black'}`}>
            © {currentYear} {personalInfo.name}. All Rights Reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isDark
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-900 border-zinc-800'
                  : 'text-black hover:text-white hover:bg-black border-neutral-300'
              }`}
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isDark
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-900 border-zinc-800'
                  : 'text-black hover:text-white hover:bg-black border-neutral-300'
              }`}
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 rounded-lg border transition-all ${
                isDark
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-900 border-zinc-800'
                  : 'text-black hover:text-white hover:bg-black border-neutral-300'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button in Pure B&W */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-30 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-200 hover:-translate-y-1 focus:outline-none ${
          isDark
            ? 'bg-white text-black hover:bg-zinc-200 shadow-white/10'
            : 'bg-black hover:bg-neutral-800 text-white shadow-black/20'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
