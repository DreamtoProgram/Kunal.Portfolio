import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { MicrosoftLogo, OracleLogo, PythonLogo, SnowflakeLogo, SqlLogo } from './BrandLogos';

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
        return <Award className={`w-10 h-10 ${isDark ? 'text-white' : 'text-black'}`} />;
    }
  };

  return (
    <section
      id="certifications"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#09090b] border-zinc-900' : 'bg-[#fafafa] border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <Award className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Certifications
          </h2>
        </div>

        {/* 5 Cards Grid in Pure Black & White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertificate(cert)}
              className={`rounded-2xl p-5 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between cursor-pointer group ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-500'
                  : 'bg-white border-neutral-300 hover:border-black'
              }`}
            >
              {/* Logo Container */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border ${
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
                      ? 'text-white group-hover:text-zinc-200'
                      : 'text-black'
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
                className={`mt-4 pt-3 border-t w-full flex items-center justify-between text-xs ${
                  isDark ? 'border-zinc-800' : 'border-neutral-200'
                }`}
              >
                <span className={`font-black ${isDark ? 'text-white' : 'text-black'}`}>
                  {cert.date}
                </span>
                <span
                  className={`text-[10px] font-bold flex items-center gap-0.5 ${
                    isDark
                      ? 'text-zinc-400 group-hover:text-white'
                      : 'text-neutral-700 group-hover:text-black'
                  }`}
                >
                  Details <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
