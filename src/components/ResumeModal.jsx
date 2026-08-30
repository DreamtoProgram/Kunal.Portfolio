import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeModal = ({ isDark, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp border transition-colors ${
          isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-neutral-300'
        }`}
      >
        {/* Modal Top Bar */}
        <div
          className={`px-5 sm:px-6 py-4 flex items-center justify-between border-b ${
            isDark ? 'bg-black border-zinc-800 text-white' : 'bg-neutral-50 border-neutral-200 text-black'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                isDark ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-neutral-100 border-neutral-300 text-black'
              }`}
            >
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span
                className={`text-sm font-black tracking-wide block ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {personalInfo.fullName} – Resume
              </span>
              <span className={`text-[11px] font-bold ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
                Official Document
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct PDF Download Button */}
            <a
              href="/resume.pdf"
              download="Kunal_Kumar_Singh_Resume.pdf"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-md ${
                isDark
                  ? 'bg-white hover:bg-zinc-200 text-black shadow-white/10'
                  : 'bg-black hover:bg-neutral-800 text-white shadow-black/20'
              }`}
              title="Download Original Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
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
        </div>

        {/* Scrollable Container with the Original Resume */}
        <div
          className={`flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center items-start ${
            isDark ? 'bg-zinc-950' : 'bg-neutral-100'
          }`}
        >
          <div
            className={`max-w-3xl w-full rounded-xl shadow-lg overflow-hidden border ${
              isDark ? 'bg-black border-zinc-800' : 'bg-white border-neutral-300'
            }`}
          >
            <img
              src="/resume_preview.png"
              alt={`${personalInfo.fullName} Original Resume`}
              className="w-full h-auto object-contain select-none"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div
          className={`px-6 py-3 text-xs flex items-center justify-between border-t ${
            isDark ? 'bg-black border-zinc-800 text-zinc-300' : 'bg-neutral-50 border-neutral-200 text-black font-semibold'
          }`}
        >
          <span>Official Resume of {personalInfo.fullName}</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-black flex items-center gap-1 transition-colors ${
              isDark ? 'text-white hover:underline' : 'text-black hover:underline'
            }`}
          >
            <span>Open PDF in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
