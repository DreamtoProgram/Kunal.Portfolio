import React from 'react';
import { X, ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { CoprotMockup, ChatbotMockup, DashboardMockup } from './ProjectGraphics';
import { GithubIcon } from './BrandLogos';

export const ProjectModal = ({ isDark, project, onClose }) => {
  if (!project) return null;

  const renderVisual = (previewType) => {
    switch (previewType) {
      case 'coprot_mockup':
        return <CoprotMockup className="h-56 w-full" />;
      case 'chatbot_mockup':
        return <ChatbotMockup className="h-56 w-full" />;
      case 'dashboard_mockup':
        return <DashboardMockup className="h-56 w-full" />;
      default:
        return <CoprotMockup className="h-56 w-full" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border transform animate-scaleUp ${
          isDark ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 flex items-center justify-between sticky top-0 z-10 border-b ${
            isDark ? 'bg-black border-zinc-800' : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-zinc-400' : 'text-neutral-600'
                }`}
              >
                {project.subtitle}
              </span>
              
              {project.featured && (
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${
                    isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                  }`}
                >
                  Featured Project
                </span>
              )}

              {project.isUpcoming && (
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold border flex items-center gap-1 ${
                    isDark 
                      ? 'bg-amber-950/60 text-amber-300 border-amber-800/80' 
                      : 'bg-amber-50 text-amber-900 border-amber-300'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>Upcoming Project</span>
                </span>
              )}
            </div>
            <h3 className="text-xl font-black mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors focus:outline-none ${
              isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-neutral-500 hover:text-black hover:bg-neutral-200'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview */}
        <div className={`p-6 border-b relative ${isDark ? 'bg-black border-zinc-800' : 'bg-neutral-100 border-neutral-200'}`}>
          {renderVisual(project.previewType)}
          
          {project.isUpcoming && (
            <div className="absolute bottom-4 right-4 z-10">
              <span className={`px-3 py-1 rounded-lg text-xs font-bold shadow-md border backdrop-blur-md flex items-center gap-1.5 ${
                isDark 
                  ? 'bg-black/90 text-white border-zinc-700' 
                  : 'bg-white/95 text-black border-neutral-300'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Architecture & Blueprint Phase</span>
              </span>
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                isDark ? 'text-zinc-400' : 'text-neutral-500'
              }`}
            >
              {project.isUpcoming ? 'Project Scope & Problem Statement' : 'Project Overview & Problem Statement'}
            </h4>
            <p
              className={`text-sm leading-relaxed font-medium ${
                isDark ? 'text-zinc-300' : 'text-neutral-700'
              }`}
            >
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features & Architecture Roadmap */}
          {project.features && (
            <div>
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                  isDark ? 'text-zinc-400' : 'text-neutral-500'
                }`}
              >
                {project.isUpcoming ? 'Planned Architecture & Core Capabilities' : 'Key Technical Highlights & Implementation'}
              </h4>
              <div className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                      isDark ? 'text-zinc-200' : 'text-neutral-800'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                isDark ? 'text-zinc-400' : 'text-neutral-500'
              }`}
            >
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                    isDark
                      ? 'bg-zinc-900 text-white border-zinc-700'
                      : 'bg-neutral-100 text-black border-neutral-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div
          className={`p-4 border-t flex items-center justify-between ${
            isDark ? 'bg-black border-zinc-800' : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-extrabold transition-colors shadow-sm ${
                isDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>{project.isUpcoming ? 'Repository / Specs' : 'View Source on GitHub'}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
