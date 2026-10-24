import React from 'react';
import { Code2, Brain, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { ScrollReveal } from './animations/ScrollReveal';
import { TiltCard } from './animations/TiltCard';
import { SectionHeading } from './animations/SectionHeading';
import { AmbientBackground } from './animations/AmbientBackground';

export const Skills = ({ isDark }) => {
  const categoryConfig = [
    {
      key: 'programming',
      data: skillsData.programming,
      icon: Code2,
    },
    {
      key: 'dataAndAI',
      data: skillsData.dataAndAI,
      icon: Brain,
    },
    {
      key: 'toolsAndTech',
      data: skillsData.toolsAndTech,
      icon: Wrench,
    }
  ];

  return (
    <section
      id="skills"
      className={`relative py-16 md:py-20 border-b transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#09090b] border-zinc-900' : 'bg-[#fafafa] border-neutral-200'
      }`}
    >
      <AmbientBackground isDark={isDark} position="bottom-left" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          icon={Code2}
          title="Skills"
          isDark={isDark}
          className="mb-10"
        />

        {/* 3 Categories Grid with Staggered Entrance and 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categoryConfig.map(({ key, data, icon: IconComponent }, idx) => (
            <ScrollReveal
              key={key}
              direction="up"
              distance={26}
              delay={idx * 120}
              duration={600}
            >
              <TiltCard isDark={isDark} maxTilt={6} className="h-full">
                <div
                  className={`portfolio-card h-full rounded-2xl p-6 sm:p-7 border shadow-sm flex flex-col justify-between group ${
                    isDark
                      ? 'bg-zinc-900/90 border-zinc-800'
                      : 'bg-white border-neutral-300'
                  }`}
                >
                  <div>
                    {/* Header of category card with subtle icon lift and rotate */}
                    <div
                      className={`flex items-center gap-3 mb-6 pb-3 border-b transition-colors ${
                        isDark ? 'border-zinc-800 group-hover:border-zinc-700' : 'border-neutral-200 group-hover:border-neutral-300'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:border-violet-500/60 group-hover:shadow-[0_0_12px_rgba(109,40,217,0.3)] ${
                          isDark
                            ? 'bg-zinc-800 border-zinc-700 text-violet-400'
                            : 'bg-neutral-100 border-neutral-300 text-violet-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <h3
                        className={`text-lg font-black tracking-tight transition-colors ${
                          isDark ? 'text-white group-hover:text-violet-300' : 'text-black group-hover:text-violet-700'
                        }`}
                      >
                        {data.title}
                      </h3>
                    </div>

                    {/* Skill Pills / Badges with Staggered Hover Lift & Violet Glow */}
                    <div className="flex flex-wrap gap-2.5">
                      {data.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className={`portfolio-badge inline-block px-3.5 py-1.5 rounded-lg font-bold text-xs sm:text-sm border select-none cursor-default transition-all duration-200 ${
                            isDark
                              ? 'bg-black text-white border-zinc-700 hover:border-violet-400 hover:text-violet-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                              : 'bg-neutral-100 text-black border-neutral-300 hover:border-violet-600 hover:text-violet-700 hover:shadow-[0_0_10px_rgba(109,40,217,0.2)]'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Indicator with Pulsing Violet Beacon */}
                  <div
                    className={`mt-6 pt-3 flex items-center justify-between text-xs border-t transition-colors ${
                      isDark ? 'border-zinc-800 text-zinc-400' : 'border-neutral-200 text-neutral-500 font-semibold'
                    }`}
                  >
                    <span>{data.skills.length} competencies</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-400 shadow-[0_0_8px_rgba(109,40,217,0.8)]" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
