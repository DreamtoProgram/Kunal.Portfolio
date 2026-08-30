import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = ({ isDark }) => {
  return (
    <section
      id="education"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Education
          </h2>
        </div>

        {/* 3 Step Connected Cards Timeline Layout in Pure Black & White */}
        <div className="relative">
          {/* Connecting Line across cards */}
          <div
            className={`hidden lg:block absolute top-7 left-12 right-12 h-0.5 -z-0 ${
              isDark ? 'bg-zinc-800' : 'bg-neutral-300'
            }`}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {educationData.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 border shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative ${
                  isDark
                    ? 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-500'
                    : 'bg-neutral-50 border-neutral-300 hover:border-black'
                }`}
              >
                <div>
                  {/* Top Timeline Node & Period */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-110 ${
                          isDark ? 'bg-white ring-4 ring-zinc-800' : 'bg-black ring-4 ring-neutral-200'
                        }`}
                      ></div>
                      <span
                        className={`text-xs font-bold ${
                          isDark ? 'text-zinc-400' : 'text-neutral-600'
                        }`}
                      >
                        {item.displayPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Degree Title in Black & White */}
                  <h3
                    className={`text-base sm:text-lg font-black leading-snug mb-2 transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-zinc-200'
                        : 'text-black'
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
                    <Building2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-zinc-400' : 'text-black'}`} />
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
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-extrabold text-xs sm:text-sm border shadow-2xs ${
                      isDark
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                    }`}
                  >
                    <Award className={`w-3.5 h-3.5 ${isDark ? 'text-black' : 'text-white'}`} />
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
