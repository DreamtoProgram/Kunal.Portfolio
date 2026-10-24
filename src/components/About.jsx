import React from 'react';
import { User, MapPin, Mail, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../utils/useScrollReveal';

export const About = ({ isDark }) => {
  const [sectionRef, isVisible] = useScrollReveal();

  const infoList = [
    {
      icon: <User className={`w-4 h-4 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      label: "Name",
      value: personalInfo.name,
      subValue: personalInfo.fullName !== personalInfo.name ? `(${personalInfo.fullName})` : null
    },
    {
      icon: <MapPin className={`w-4 h-4 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      label: "Location",
      value: personalInfo.displayLocation,
      subValue: personalInfo.location
    },
    {
      icon: <Mail className={`w-4 h-4 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      label: "Email",
      value: personalInfo.email,
      isEmail: true
    },
    {
      icon: <GraduationCap className={`w-4 h-4 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      label: "Study",
      value: "B.Tech AI & Data Engineering (2025 – Present)",
      subValue: "Lovely Professional University"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900 text-zinc-200' : 'bg-white border-neutral-200 text-neutral-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Violet Glow on Hover */}
        <div className={`flex items-center gap-3 mb-10 portfolio-reveal ${isVisible ? 'in-view' : ''}`}>
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm portfolio-header-icon ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <User className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            About Me
          </h2>
        </div>

        {/* Two Column Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Narrative */}
          <div className={`lg:col-span-7 space-y-5 leading-relaxed text-base portfolio-reveal portfolio-stagger-1 ${isVisible ? 'in-view' : ''}`}>
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              I'm Kunal, and I'm currently focused on building my skills in AI, data, and software development.
            </p>
            <p className={isDark ? 'text-zinc-300' : 'text-neutral-700'}>
              I enjoy learning how things work and understanding the logic behind them. That's what initially made me interested in programming and problem-solving. I spend a lot of my time learning, practicing, and building things that help me understand concepts better.
            </p>
            <p className={isDark ? 'text-zinc-300' : 'text-neutral-700'}>
              Right now, I'm exploring areas like Python, AI, data engineering, and problem-solving. I'm still early in my journey, so I don't want to pretend that I already know everything. What I can say is that I'm consistently working on improving my skills and trying to understand things properly instead of just memorizing them.
            </p>
          </div>

          {/* Right Column: Quick-Info Box with Interactive Elevation & Ambient Violet Glow */}
          <div className={`lg:col-span-5 portfolio-reveal portfolio-stagger-2 ${isVisible ? 'in-view' : ''}`}>
            <div
              className={`portfolio-card rounded-2xl p-6 sm:p-7 border shadow-sm space-y-5 ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800'
                  : 'bg-neutral-50 border-neutral-300'
              }`}
            >
              {infoList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group/item">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border transition-all duration-200 group-hover/item:scale-110 group-hover/item:border-violet-500/50 ${
                      isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-neutral-200 border-neutral-300'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isDark ? 'text-zinc-400' : 'text-neutral-500'
                      }`}
                    >
                      {item.label}
                    </div>
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className={`text-sm sm:text-base font-bold transition-colors break-all block ${
                          isDark ? 'text-white hover:text-violet-400' : 'text-black hover:text-violet-600'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        className={`text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      >
                        {item.value}
                      </div>
                    )}
                    {item.subValue && (
                      <div className={`text-xs mt-0.5 ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                        {item.subValue}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
