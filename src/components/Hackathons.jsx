import React from 'react';
import { 
  Terminal, 
  Calendar, 
  MapPin, 
  Users, 
  Layers, 
  Database, 
  Cpu, 
  Eye, 
  ExternalLink, 
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';

export const Hackathons = ({ isDark, onSelectCertificate }) => {
  return (
    <section
      id="hackathons"
      className={`py-16 md:py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-black border-zinc-900' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <Terminal className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Hackathons & Events
          </h2>
        </div>

        <p
          className={`text-sm sm:text-base font-medium max-w-2xl mb-10 ${
            isDark ? 'text-zinc-400' : 'text-neutral-600'
          }`}
        >
          Learning by building — real-world projects, tight deadlines, and collaborative problem solving.
        </p>

        {/* Hackathon Cards */}
        <div className="space-y-12">
          {hackathonsData.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border shadow-sm transition-all duration-200 overflow-hidden ${
                isDark
                  ? 'bg-zinc-900/90 border-zinc-800'
                  : 'bg-white border-neutral-300'
              }`}
            >
              {/* Event Header Banner */}
              <div
                className={`p-6 sm:p-8 border-b ${
                  isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border ${
                        isDark
                          ? 'bg-white text-black border-white'
                          : 'bg-black text-white border-black'
                      }`}
                    >
                      {item.event}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-extrabold border ${
                        isDark
                          ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                          : 'bg-neutral-200 text-neutral-800 border-neutral-300'
                      }`}
                    >
                      {item.tagline}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold border inline-flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-zinc-900 text-zinc-300 border-zinc-700'
                        : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Participation Record</span>
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                  {item.event} • 36-Hour Collaborative Hackathon
                </h3>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-3 text-xs sm:text-sm font-semibold">
                  <div className={`flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>Organized by {item.organizer}</span>
                  </div>
                </div>

                <p className={`text-xs mt-2 italic font-medium ${isDark ? 'text-zinc-500' : 'text-neutral-500'}`}>
                  Under the aegis of {item.organizerDetail}
                </p>
              </div>

              {/* Main Content: Project Built & Experience */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Project Showcase Box */}
                <div
                  className={`p-6 rounded-2xl border ${
                    isDark ? 'bg-black/60 border-zinc-800' : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg border ${
                        isDark ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-white border-neutral-300 text-black'
                      }`}>
                        <Layers className="w-4 h-4" />
                      </div>
                      <h4 className={`text-lg sm:text-xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
                        {item.project.name}
                      </h4>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-extrabold border ${
                        isDark
                          ? 'bg-zinc-900 text-zinc-300 border-zinc-700'
                          : 'bg-white text-black border-neutral-300'
                      }`}
                    >
                      {item.project.type}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed font-medium mb-5 ${
                      isDark ? 'text-zinc-300' : 'text-neutral-700'
                    }`}
                  >
                    {item.project.description}
                  </p>

                  {/* My Contribution Callout */}
                  <div
                    className={`p-4 rounded-xl border mb-6 flex items-start gap-3 ${
                      isDark
                        ? 'bg-zinc-900/90 border-zinc-700/80 text-zinc-200'
                        : 'bg-white border-neutral-300 text-neutral-800 shadow-2xs'
                    }`}
                  >
                    <Sparkles className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDark ? 'text-white' : 'text-black'}`} />
                    <div>
                      <span className={`text-xs uppercase font-extrabold tracking-wider block mb-1 ${
                        isDark ? 'text-zinc-400' : 'text-neutral-600'
                      }`}>
                        My Contribution
                      </span>
                      <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                        {item.project.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Structured Tech Stack & Tools Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    {/* Backend */}
                    <div
                      className={`p-3.5 rounded-xl border ${
                        isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-zinc-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Backend Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.project.techStack.backend.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
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

                    {/* Database */}
                    <div
                      className={`p-3.5 rounded-xl border ${
                        isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-zinc-400">
                        <Database className="w-3.5 h-3.5" />
                        <span>Database</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.project.techStack.database.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
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

                    {/* Development & AI Tools */}
                    <div
                      className={`p-3.5 rounded-xl border ${
                        isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-neutral-500 dark:text-zinc-400">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Dev / AI Tools</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.project.techStack.tools.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
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

                  {/* 4-Member Team */}
                  <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-neutral-500 dark:text-zinc-400" />
                      <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
                        Team Members (4-Member Team)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {item.project.team.map((member, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold ${
                            member.includes('Kunal')
                              ? isDark
                                ? 'bg-white text-black border-white'
                                : 'bg-black text-white border-black'
                              : isDark
                                ? 'bg-zinc-950 text-zinc-300 border-zinc-800'
                                : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                            member.includes('Kunal')
                              ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                              : isDark ? 'bg-zinc-800 text-white' : 'bg-neutral-300 text-black'
                          }`}>
                            {member.charAt(0)}
                          </span>
                          <span>{member}</span>
                          {member.includes('Kunal') && (
                            <span className="text-[10px] uppercase tracking-wider font-extrabold opacity-80">(Me)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Event Certificates Showcase */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                      <h4 className={`text-sm sm:text-base font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                        Official Participation Certificates & Verification
                      </h4>
                    </div>
                    <span className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
                      2 Certificates
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className={`rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                          isDark
                            ? 'bg-zinc-950 border-zinc-800 hover:border-zinc-600'
                            : 'bg-neutral-50 border-neutral-300 hover:border-black'
                        }`}
                      >
                        {/* Certificate Image Thumbnail Preview */}
                        <div
                          onClick={() => onSelectCertificate(cert)}
                          className={`relative p-3 border-b cursor-pointer group overflow-hidden ${
                            isDark ? 'bg-black border-zinc-800' : 'bg-neutral-100 border-neutral-200'
                          }`}
                        >
                          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-200 dark:bg-zinc-900 relative">
                            <img
                              src={cert.imageUrl}
                              alt={cert.name}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                              <Eye className="w-4 h-4" />
                              <span>Click to Expand Preview</span>
                            </div>
                          </div>

                          <div className="absolute top-5 left-5">
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                              isDark ? 'bg-black/85 text-white border-zinc-700' : 'bg-white/90 text-black border-neutral-300'
                            }`}>
                              {cert.badge}
                            </span>
                          </div>
                        </div>

                        {/* Certificate Info & Actions */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h5 className={`font-black text-sm sm:text-base leading-snug mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                              {cert.name}
                            </h5>
                            <p className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                              {cert.issuer}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-neutral-200 dark:border-zinc-800">
                            <button
                              onClick={() => onSelectCertificate(cert)}
                              className={`w-full py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm focus:outline-none ${
                                isDark
                                  ? 'bg-white text-black hover:bg-zinc-200'
                                  : 'bg-black text-white hover:bg-neutral-800'
                              }`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View</span>
                            </button>

                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-2xs focus:outline-none border-2 ${
                                isDark
                                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-700 hover:border-white'
                                  : 'bg-white hover:bg-neutral-100 text-black border-neutral-300 hover:border-black'
                              }`}
                            >
                              <span>Verify</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
