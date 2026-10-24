import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandLogos';
import { HeroCanvas } from './HeroCanvas';
import { HeroAvatarArea } from './HeroAvatarArea';
import '../styles/homeMotion.css';

const ROLES = [
  'AI & Data Engineer',
  'Problem Solver',
  'Model Builder',
  'Pipeline Tinkerer'
];

export const Hero = ({ isDark, onOpenResume }) => {
  // 1. Role Typing / Deleting Rotation Effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const currentRole = ROLES[roleIndex];
    let timeoutId;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 75);
      } else {
        // Pause at full text for ~2s
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Switch to next role and pause briefly
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  // 2. Magnetic Pull Interaction for Buttons (max ~4px)
  const useMagnetic = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
      if (window.innerWidth < 860 || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * 0.15;
      const dy = (e.clientY - centerY) * 0.15;
      setOffset({
        x: Math.max(-4, Math.min(4, dx)),
        y: Math.max(-4, Math.min(4, dy))
      });
    };

    const handleMouseLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    return { ref, offset, handleMouseMove, handleMouseLeave };
  };

  const contactBtnMag = useMagnetic();
  const resumeBtnMag = useMagnetic();

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative pt-12 pb-24 md:pt-20 md:pb-32 border-b overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900 text-white' : 'bg-white border-neutral-200 text-black'
      }`}
    >
      {/* 1. Background: Faint Canvas Neural Network */}
      <HeroCanvas isDark={isDark} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Main Headline with Masked Reveal */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {/* Mask 1: "Hi, I'm" */}
                <span className="home-mask-container block">
                  <span
                    className={`home-reveal-text home-delay-1 block text-2xl sm:text-3xl font-medium tracking-normal mb-1 ${
                      isDark ? 'text-zinc-300' : 'text-neutral-600'
                    }`}
                  >
                    Hi, I'm
                  </span>
                </span>

                {/* Mask 2: "Kunal." */}
                <span className="home-mask-container block">
                  <span
                    className={`home-reveal-text home-delay-2 font-black ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {personalInfo.name}.
                  </span>
                </span>
              </h1>

              {/* Status / Availability Badge with Typing Role */}
              <div className="home-fade-up home-delay-3 pt-1 flex justify-center lg:justify-start">
                <div
                  className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-bold shadow-2xs transition-colors ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-700 text-white'
                      : 'bg-white border-neutral-300 text-black'
                  }`}
                >
                  {/* Soft pulsing ping ring dot in accent violet */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600 dark:bg-violet-400" />
                  </span>

                  {/* Typing / Deleting Dynamic Role */}
                  <span className="font-extrabold text-sm min-w-[140px] text-left">
                    <span className={isDark ? 'text-white' : 'text-black'}>
                      {displayText}
                    </span>
                    <span
                      className="inline-block w-[2px] h-[1em] bg-violet-600 dark:bg-violet-400 ml-0.5 align-middle animate-pulse"
                      aria-hidden="true"
                    />
                  </span>

                  {/* Static Opportunities Tag */}
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      isDark
                        ? 'bg-zinc-800 text-white'
                        : 'bg-neutral-100 text-black border border-neutral-200'
                    }`}
                  >
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Short Engaging Bio */}
            <p
              className={`home-fade-up home-delay-4 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal ${
                isDark ? 'text-zinc-300' : 'text-neutral-700'
              }`}
            >
              {personalInfo.tagline}
            </p>

            {/* Location Tag */}
            <div
              className={`home-fade-up home-delay-5 flex items-center justify-center lg:justify-start gap-1.5 text-xs font-semibold ${
                isDark ? 'text-zinc-400' : 'text-neutral-600'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
              <span>{personalInfo.location}</span>
            </div>

            {/* Call to Actions (Interactive Buttons with Shine, Magnetic Pull & Violet Glow) */}
            <div className="home-fade-up home-delay-6 pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                ref={contactBtnMag.ref}
                onMouseMove={contactBtnMag.handleMouseMove}
                onMouseLeave={contactBtnMag.handleMouseLeave}
                style={{
                  transform: `translate3d(${contactBtnMag.offset.x}px, ${contactBtnMag.offset.y}px, 0)`
                }}
                href="#contact"
                onClick={scrollToContact}
                className={`home-btn-shine home-btn-glow group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-md focus:outline-none ${
                  isDark
                    ? 'bg-white hover:bg-zinc-200 text-black shadow-white/10'
                    : 'bg-black hover:bg-neutral-800 text-white shadow-neutral-900/20'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>

              <button
                ref={resumeBtnMag.ref}
                onMouseMove={resumeBtnMag.handleMouseMove}
                onMouseLeave={resumeBtnMag.handleMouseLeave}
                style={{
                  transform: `translate3d(${resumeBtnMag.offset.x}px, ${resumeBtnMag.offset.y}px, 0)`
                }}
                onClick={onOpenResume}
                className={`home-btn-shine home-btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base border-2 focus:outline-none ${
                  isDark
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700 hover:border-violet-500 shadow-2xs'
                    : 'bg-white hover:bg-neutral-100 text-black border-black hover:border-violet-600 shadow-2xs'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Proof Links with Lift & Violet Highlight */}
            <div className="home-fade-up home-delay-7 pt-4 flex items-center justify-center lg:justify-start space-x-3">
              <span
                className={`text-xs font-bold uppercase tracking-wider mr-1 ${
                  isDark ? 'text-zinc-400' : 'text-neutral-500'
                }`}
              >
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`home-social-icon p-2.5 rounded-xl border shadow-2xs ${
                  isDark
                    ? 'bg-zinc-900 text-white border-zinc-800'
                    : 'bg-neutral-100 text-black border-neutral-300'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`home-social-icon p-2.5 rounded-xl border shadow-2xs ${
                  isDark
                    ? 'bg-zinc-900 text-white border-zinc-800'
                    : 'bg-neutral-100 text-black border-neutral-300'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Photo Area with Orbiting Skill Chips & Violet Blob */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroAvatarArea isDark={isDark} />
          </div>

        </div>
      </div>

      {/* Animated Scroll-Down Mouse Indicator at Bottom of Hero */}
      <a
        href="#about"
        onClick={scrollToAbout}
        className="home-fade-up home-delay-8 absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer group z-20"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex justify-center p-1 group-hover:border-violet-600 dark:group-hover:border-violet-400 transition-colors">
          <div className="w-1 h-2 rounded-full bg-violet-600 dark:bg-violet-400 home-mouse-wheel" />
        </div>
      </a>
    </section>
  );
};
