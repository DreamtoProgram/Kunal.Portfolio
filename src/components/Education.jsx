import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { useScrollReveal } from '../utils/useScrollReveal';

export const Education = ({ isDark }) => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Violet Glow on Hover */}
        <div className={`flex items-center gap-3 mb-12 portfolio-reveal ${isVisible ? 'in-view' : ''}`}>
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm portfolio-header-icon ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Education
          </h2>
        </div>

        {/* 3 Step Connected Cards Timeline Layout with Glowing Violet Line */}
        <div className="relative">
          {/* Connecting Line across cards with Violet Gradient */}
          <div
            className={`hidden lg:block absolute top-7 left-12 right-12 h-0.5 -z-0 ${
              isDark
                ? 'bg-gradient-to-r from-violet-600/30 via-violet-500/50 to-purple-600/30'
                : 'bg-gradient-to-r from-violet-400/40 via-violet-600/60 to-purple-500/40'
            }`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {educationData.map((item, idx) => (
              <div
                key={item.id}
                className={`portfolio-card portfolio-reveal portfolio-stagger-${idx + 1} ${
                  isVisible ? 'in-view' : ''
                } rounded-2xl p-6 sm:p-7 border shadow-sm flex flex-col justify-between group relative ${
                  isDark
                    ? 'bg-zinc-900/90 border-zinc-800'
                    : 'bg-neutral-50 border-neutral-300'
                }`}
              >
                <div>
                  {/* Top Timeline Node & Period */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
                        <div
                          className={`w-3.5 h-3.5 rounded-full relative z-10 transition-transform group-hover:scale-125 ${
                            isDark
                              ? 'bg-violet-400 ring-4 ring-zinc-800 shadow-[0_0_8px_rgba(139,92,246,0.8)]'
                              : 'bg-violet-600 ring-4 ring-neutral-200 shadow-[0_0_8px_rgba(109,40,217,0.6)]'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs font-bold ${
                          isDark ? 'text-zinc-400' : 'text-neutral-600'
                        }`}
                      >
                        {item.displayPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3
                    className={`text-base sm:text-lg font-black leading-snug mb-2 transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-violet-300'
                        : 'text-black group-hover:text-violet-700'
                    }`}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution Name */}
                  <p
                    className={`text-xs sm:text-sm mb-3 flex items-start gap-1.5 font-bold ${
                      isDark ? 'text-zinc-300' : 'text-neutral-700'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
                    <span>{item.institution}</span>
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-4 font-medium ${
                      isDark ? 'text-zinc-400' : 'text-neutral-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Score Badge */}
                <div
                  className={`pt-3 border-t flex items-center justify-start ${
                    isDark ? 'border-zinc-800' : 'border-neutral-200'
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-extrabold text-xs sm:text-sm border shadow-2xs transition-transform duration-200 group-hover:scale-105 ${
                      isDark
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                    }`}
                  >
                    <Award className={`w-3.5 h-3.5 ${isDark ? 'text-violet-600' : 'text-violet-400'}`} />
                    {item.scoreBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
