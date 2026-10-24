import React from 'react';
import { User, MapPin, Mail, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './animations/ScrollReveal';
import { TiltCard } from './animations/TiltCard';
import { SectionHeading } from './animations/SectionHeading';
import { AmbientBackground } from './animations/AmbientBackground';

export const About = ({ isDark }) => {
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
      id="about"
      className={`relative py-16 md:py-20 border-b transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-black border-zinc-900 text-zinc-200' : 'bg-white border-neutral-200 text-neutral-800'
      }`}
    >
      {/* Subtle ambient background continuation */}
      <AmbientBackground isDark={isDark} position="top-right" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Icon Hover Glow */}
        <SectionHeading
          icon={User}
          title="About Me"
          isDark={isDark}
          className="mb-10"
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Narrative with Staggered Scroll Reveal */}
          <div className="lg:col-span-7 space-y-5 leading-relaxed text-base">
            <ScrollReveal direction="up" distance={18} delay={80} duration={600}>
              <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                I'm <span className="text-violet-600 dark:text-violet-400">Kunal</span>, and I'm currently focused on building my skills in{' '}
                <span className="underline decoration-violet-500/40 decoration-2 underline-offset-4 font-extrabold hover:text-violet-600 dark:hover:text-violet-400 transition-colors">AI</span>,{' '}
                <span className="underline decoration-violet-500/40 decoration-2 underline-offset-4 font-extrabold hover:text-violet-600 dark:hover:text-violet-400 transition-colors">data</span>, and{' '}
                <span className="underline decoration-violet-500/40 decoration-2 underline-offset-4 font-extrabold hover:text-violet-600 dark:hover:text-violet-400 transition-colors">software development</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={18} delay={180} duration={600}>
              <p className={isDark ? 'text-zinc-300' : 'text-neutral-700'}>
                I enjoy learning how things work and understanding the logic behind them. That's what initially made me interested in programming and problem-solving. I spend a lot of my time learning, practicing, and building things that help me understand concepts better.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={18} delay={280} duration={600}>
              <p className={isDark ? 'text-zinc-300' : 'text-neutral-700'}>
                Right now, I'm exploring areas like <strong className="text-black dark:text-white font-bold">Python</strong>, <strong className="text-black dark:text-white font-bold">AI</strong>, <strong className="text-black dark:text-white font-bold">data engineering</strong>, and <strong className="text-black dark:text-white font-bold">problem-solving</strong>. I'm still early in my journey, so I don't want to pretend that I already know everything. What I can say is that I'm consistently working on improving my skills and trying to understand things properly instead of just memorizing them.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Quick-Info Box wrapped in TiltCard with Smooth 3D Perspective */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" distance={24} delay={150} duration={650}>
              <TiltCard isDark={isDark} maxTilt={6} className="rounded-2xl">
                <div
                  className={`portfolio-card rounded-2xl p-6 sm:p-7 border shadow-sm space-y-5 transition-all ${
                    isDark
                      ? 'bg-zinc-900/90 border-zinc-800'
                      : 'bg-neutral-50 border-neutral-300'
                  }`}
                >
                  {infoList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border transition-all duration-200 group-hover/item:scale-110 group-hover/item:border-violet-500/60 group-hover/item:shadow-[0_0_12px_rgba(109,40,217,0.3)] ${
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
                            className={`text-sm sm:text-base font-bold transition-colors group-hover/item:text-violet-600 dark:group-hover/item:text-violet-400 ${
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
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
