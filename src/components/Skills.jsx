import React from 'react';
import { Code2, Brain, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = ({ isDark }) => {
  const categoryConfig = [
    {
      key: 'programming',
      data: skillsData.programming,
      icon: <Code2 className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />,
    },
    {
      key: 'dataAndAI',
      data: skillsData.dataAndAI,
      icon: <Brain className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />,
    },
    {
      key: 'toolsAndTech',
      data: skillsData.toolsAndTech,
      icon: <Wrench className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />,
    }
  ];

  return (
    <section
      id="skills"
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
            <Code2 className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Skills
          </h2>
        </div>

        {/* 3 Categories Grid in Pure Black & White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categoryConfig.map(({ key, data, icon }) => (
            <div
              key={key}
              className={`rounded-2xl p-6 sm:p-7 border shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-500'
                  : 'bg-white border-neutral-300 hover:border-black'
              }`}
            >
              <div>
                {/* Header of category card */}
                <div
                  className={`flex items-center gap-3 mb-6 pb-3 border-b ${
                    isDark ? 'border-zinc-800' : 'border-neutral-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                      isDark
                        ? 'bg-zinc-800 border-zinc-700'
                        : 'bg-neutral-100 border-neutral-300'
                    }`}
                  >
                    {icon}
                  </div>
                  <h3
                    className={`text-lg font-black tracking-tight ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {data.title}
                  </h3>
                </div>

                {/* Skill Pills / Badges in Pure Black & White */}
                <div className="flex flex-wrap gap-2.5">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-block px-3.5 py-1.5 rounded-lg font-bold text-xs sm:text-sm border transition-all duration-150 select-none ${
                        isDark
                          ? 'bg-black hover:bg-zinc-800 text-white border-zinc-700 hover:border-white shadow-2xs'
                          : 'bg-neutral-100 hover:bg-black text-black hover:text-white border-neutral-300 hover:border-black shadow-2xs'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Indicator */}
              <div
                className={`mt-6 pt-3 flex items-center justify-between text-xs border-t ${
                  isDark ? 'border-zinc-800 text-zinc-400' : 'border-neutral-200 text-neutral-500 font-semibold'
                }`}
              >
                <span>{data.skills.length} competencies</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-white' : 'bg-black'
                  }`}
                ></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
