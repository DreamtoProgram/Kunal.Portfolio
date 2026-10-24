import React from 'react';
import { Briefcase, ExternalLink, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { CoprotMockup, ChatbotMockup, DashboardMockup } from './ProjectGraphics';
import { GithubIcon } from './BrandLogos';
import { useScrollReveal } from '../utils/useScrollReveal';

export const Projects = ({ isDark, onSelectProject }) => {
  const [sectionRef, isVisible] = useScrollReveal();

  const renderVisual = (previewType) => {
    switch (previewType) {
      case 'coprot_mockup':
        return <CoprotMockup className="h-44 w-full transition-transform duration-300 group-hover:scale-[1.02]" />;
      case 'chatbot_mockup':
        return <ChatbotMockup className="h-44 w-full transition-transform duration-300 group-hover:scale-[1.02]" />;
      case 'dashboard_mockup':
        return <DashboardMockup className="h-44 w-full transition-transform duration-300 group-hover:scale-[1.02]" />;
      default:
        return <CoprotMockup className="h-44 w-full transition-transform duration-300 group-hover:scale-[1.02]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900' : 'bg-white border-neutral-200'
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
            <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Projects
          </h2>
        </div>

        {/* 3 Projects Horizontal Grid with Staggered Scroll Reveal & Interactive Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={`portfolio-card portfolio-reveal portfolio-stagger-${idx + 1} ${
                isVisible ? 'in-view' : ''
              } rounded-2xl border shadow-sm flex flex-col justify-between group relative overflow-hidden ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800'
                  : 'bg-white border-neutral-300'
              }`}
            >
              <div>
                {/* Project Visual Preview Container */}
                <div
                  className={`p-3 border-b relative overflow-hidden rounded-t-2xl ${
                    isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  {renderVisual(project.previewType)}

                  {/* Elegant Floating Badge on Visual Preview */}
                  {project.isUpcoming && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                        isDark
                          ? 'bg-black/85 text-white border-zinc-700'
                          : 'bg-white/90 text-black border-neutral-300'
                      }`}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                        </span>
                        <span>In Development</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3
                      className={`text-lg font-black transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-violet-300'
                          : 'text-black group-hover:text-violet-700'
                      }`}
                    >
                      {project.title}
                    </h3>
                    
                    {/* Status Badge */}
                    {project.featured && (
                      <span
                        className="px-2.5 py-0.5 rounded text-[10px] font-extrabold border flex-shrink-0 bg-violet-600 text-white border-violet-500 shadow-[0_0_10px_rgba(109,40,217,0.3)]"
                      >
                        Featured
                      </span>
                    )}

                    {project.isUpcoming && (
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold border flex-shrink-0 inline-flex items-center gap-1 ${
                          isDark
                            ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                            : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                        }`}
                      >
                        <Clock className="w-2.5 h-2.5 text-violet-400" />
                        <span>Upcoming</span>
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-medium ${
                      isDark ? 'text-zinc-300' : 'text-neutral-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`text-xs font-bold mb-2 ${
                      isDark ? 'text-zinc-300' : 'text-neutral-800'
                    }`}
                  >
                    <span className={isDark ? 'text-zinc-400' : 'text-neutral-500'}>
                      Tech Stack:{' '}
                    </span>
                    <span className={isDark ? 'text-white font-extrabold' : 'text-black font-extrabold'}>
                      {project.techStack.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Diagonal Shine Sweep & Violet Glow */}
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`home-btn-shine home-btn-glow w-full py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm focus:outline-none ${
                      isDark
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-white/5'
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{project.isUpcoming ? 'View Specs' : 'View Project'}</span>
                    {project.isUpcoming ? <Sparkles className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`home-btn-shine w-full py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-2xs focus:outline-none border-2 transition-colors ${
                      isDark
                        ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700 hover:border-violet-400'
                        : 'bg-white hover:bg-neutral-100 text-black border-neutral-300 hover:border-violet-600'
                    }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{project.isUpcoming ? 'Source (WIP)' : 'GitHub'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View More Projects Link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/DreamtoProgram"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-extrabold text-sm sm:text-base group transition-colors ${
              isDark ? 'text-white hover:text-violet-400' : 'text-black hover:text-violet-600'
            }`}
          >
            <span>View More Projects</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
