import React from 'react';
import { ArrowRight, FileText, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandLogos';

export const Hero = ({ isDark, onOpenResume }) => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative pt-12 pb-20 md:pt-20 md:pb-28 border-b overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900 text-white' : 'bg-white border-neutral-200 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Main Headline in Crisp Black & White */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className={`block text-2xl sm:text-3xl font-medium tracking-normal mb-1 ${
                  isDark ? 'text-zinc-300' : 'text-neutral-600'
                }`}>
                  Hi, I'm
                </span>
                <span className={`font-black ${isDark ? 'text-white' : 'text-black'}`}>
                  {personalInfo.name}.
                </span>
              </h1>

              {/* Status / Availability Badge placed after "Hi, I'm Kunal." */}
              <div className="pt-1 flex justify-center lg:justify-start">
                <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-bold shadow-2xs ${
                  isDark ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-white border-neutral-300 text-black'
                }`}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDark ? 'bg-white' : 'bg-black'}`}></span>
                  </span>
                  <span className={`font-extrabold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                    {personalInfo.title}
                  </span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    isDark ? 'bg-zinc-800 text-white' : 'bg-neutral-100 text-black border border-neutral-200'
                  }`}>
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Short Engaging Bio */}
            <p className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal ${
              isDark ? 'text-zinc-300' : 'text-neutral-700'
            }`}>
              {personalInfo.tagline}
            </p>

            {/* Location Tag */}
            <div className={`flex items-center justify-center lg:justify-start gap-1.5 text-xs font-semibold ${
              isDark ? 'text-zinc-400' : 'text-neutral-600'
            }`}>
              <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
              <span>{personalInfo.location}</span>
            </div>

            {/* Call to Actions (Pure B&W) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 shadow-md focus:outline-none ${
                  isDark
                    ? 'bg-white hover:bg-zinc-200 text-black shadow-white/10'
                    : 'bg-black hover:bg-neutral-800 text-white shadow-neutral-900/20'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base border-2 transition-all duration-200 focus:outline-none ${
                  isDark
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700 hover:border-white shadow-2xs'
                    : 'bg-white hover:bg-neutral-100 text-black border-black shadow-2xs'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Proof Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-3">
              <span className={`text-xs font-bold uppercase tracking-wider mr-1 ${
                isDark ? 'text-zinc-400' : 'text-neutral-500'
              }`}>
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-200 shadow-2xs ${
                  isDark
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600'
                    : 'bg-neutral-100 text-black border-neutral-300 hover:bg-black hover:text-white hover:border-black'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-200 shadow-2xs ${
                  isDark
                    ? 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hover:border-zinc-600'
                    : 'bg-neutral-100 text-black border-neutral-300 hover:bg-black hover:text-white hover:border-black'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: User's Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Outer Decorative Ring */}
              <div
                className={`absolute -inset-2 rounded-full blur-sm opacity-40 transition duration-500 group-hover:opacity-70 ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}
              ></div>

              {/* Avatar Frame in Pure Black & White - Fine-tuned Sweet Spot */}
              <div
                className={`relative w-60 h-60 sm:w-68 sm:h-68 lg:w-[295px] lg:h-[295px] rounded-full p-2 border-2 transition-transform duration-300 group-hover:scale-102 ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-700 shadow-2xl shadow-black'
                    : 'bg-neutral-100 border-black shadow-xl shadow-neutral-900/10'
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-200">
                  <img
                    src="/profile.png"
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top select-none"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
