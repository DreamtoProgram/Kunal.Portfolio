import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { MicrosoftLogo, OracleLogo, PythonLogo, SnowflakeLogo, SqlLogo } from './BrandLogos';
import { ScrollReveal } from './animations/ScrollReveal';
import { TiltCard } from './animations/TiltCard';
import { SectionHeading } from './animations/SectionHeading';
import { AmbientBackground } from './animations/AmbientBackground';

export const Certifications = ({ isDark, onSelectCertificate }) => {
  const renderLogo = (iconType) => {
    switch (iconType) {
      case 'microsoft':
        return <MicrosoftLogo className="w-10 h-10" />;
      case 'oracle':
        return <OracleLogo className="w-10 h-10" />;
      case 'python':
        return <PythonLogo className="w-10 h-10" />;
      case 'snowflake':
        return <SnowflakeLogo className="w-10 h-10" />;
      case 'sql':
        return <SqlLogo className="w-10 h-10" />;
      default:
        return <Award className={`w-10 h-10 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />;
    }
  };

  return (
    <section
      id="certifications"
      className={`relative py-16 md:py-20 border-b transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#09090b] border-zinc-900' : 'bg-[#fafafa] border-neutral-200'
      }`}
    >
      <AmbientBackground isDark={isDark} position="top-right" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          icon={Award}
          title="Certifications"
          isDark={isDark}
          className="mb-10"
        />

        {/* 5 Cards Grid with Staggered Entrance and 3D Perspective */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {certificationsData.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              direction="up"
              distance={24}
              scale={0.96}
              delay={idx * 100}
              duration={600}
            >
              <TiltCard isDark={isDark} maxTilt={7} className="h-full">
                <div
                  onClick={() => onSelectCertificate(cert)}
                  className={`portfolio-card h-full rounded-2xl p-5 border shadow-sm flex flex-col items-center text-center justify-between cursor-pointer group ${
                    isDark
                      ? 'bg-zinc-900/90 border-zinc-800'
                      : 'bg-white border-neutral-300'
                  }`}
                >
                  {/* Logo Container with Smooth Hover Scaling */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/60 group-hover:shadow-[0_0_15px_rgba(109,40,217,0.3)] border ${
                      isDark
                        ? 'bg-black border-zinc-800'
                        : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    {renderLogo(cert.iconType)}
                  </div>

                  {/* Title & Issuer */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3
                      className={`text-sm font-black transition-colors line-clamp-2 ${
                        isDark
                          ? 'text-white group-hover:text-violet-300'
                          : 'text-black group-hover:text-violet-700'
                      }`}
                    >
                      {cert.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-bold ${
                        isDark ? 'text-zinc-400' : 'text-neutral-600'
                      }`}
                    >
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Issue Date & View badge */}
                  <div
                    className={`mt-4 pt-3 border-t w-full flex items-center justify-between text-xs transition-colors ${
                      isDark ? 'border-zinc-800' : 'border-neutral-200'
                    }`}
                  >
                    <span className={isDark ? 'text-zinc-500' : 'text-neutral-500'}>
                      {cert.issueDate}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-extrabold text-[11px] transition-colors ${
                        isDark
                          ? 'text-zinc-300 group-hover:text-violet-400'
                          : 'text-black group-hover:text-violet-600'
                      }`}
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
