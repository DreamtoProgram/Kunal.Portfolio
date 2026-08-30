import React from 'react';
import { X, Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { MicrosoftLogo, OracleLogo, PythonLogo, SnowflakeLogo, SqlLogo } from './BrandLogos';

export const CertificateModal = ({ isDark, certificate, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderLogo = (iconType) => {
    switch (iconType) {
      case 'microsoft':
        return <MicrosoftLogo className="w-12 h-12" />;
      case 'oracle':
        return <OracleLogo className="w-12 h-12" />;
      case 'python':
        return <PythonLogo className="w-12 h-12" />;
      case 'snowflake':
        return <SnowflakeLogo className="w-12 h-12" />;
      case 'sql':
        return <SqlLogo className="w-12 h-12" />;
      default:
        return <Award className={`w-12 h-12 ${isDark ? 'text-white' : 'text-black'}`} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border transform animate-scaleUp ${
          isDark ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 flex items-center justify-between relative border-b ${
            isDark ? 'bg-black border-zinc-800' : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-neutral-300 shadow-xs'
              }`}
            >
              {renderLogo(certificate.iconType)}
            </div>
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-wider block ${
                  isDark ? 'text-zinc-400' : 'text-neutral-600'
                }`}
              >
                {certificate.issuer}
              </span>
              <h3 className="text-lg font-black leading-tight">
                {certificate.name}
              </h3>
            </div>
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

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Official Full Title */}
          <div>
            <div
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                isDark ? 'text-zinc-400' : 'text-neutral-500'
              }`}
            >
              Credential Title
            </div>
            <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              {certificate.fullName}
            </p>
          </div>

          {/* Issue Date & Status */}
          <div
            className={`grid grid-cols-2 gap-4 p-3.5 rounded-xl border ${
              isDark ? 'bg-black border-zinc-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div>
              <div className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
                Issue Date
              </div>
              <div className={`text-sm font-black flex items-center gap-1.5 mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>
                <Calendar className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                <span>{certificate.date}</span>
              </div>
            </div>
            <div>
              <div className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
                Verification Status
              </div>
              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Credential</span>
              </div>
            </div>
          </div>

          {/* Credential ID */}
          {certificate.credentialId && (
            <div>
              <div
                className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-zinc-400' : 'text-neutral-500'
                }`}
              >
                Credential ID
              </div>
              <div
                className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-mono ${
                  isDark
                    ? 'bg-black border-zinc-800 text-zinc-300'
                    : 'bg-neutral-50 border-neutral-300 text-black'
                }`}
              >
                <span className="truncate mr-2 select-all font-bold">{certificate.credentialId}</span>
                <button
                  onClick={handleCopyId}
                  className={`flex items-center gap-1 text-xs font-sans font-extrabold flex-shrink-0 ${
                    isDark ? 'text-white hover:underline' : 'text-black hover:underline'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Skills Covered */}
          {certificate.skills && certificate.skills.length > 0 && (
            <div>
              <div
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-zinc-400' : 'text-neutral-500'
                }`}
              >
                Demonstrated Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold border ${
                      isDark
                        ? 'bg-zinc-900 text-white border-zinc-700'
                        : 'bg-neutral-100 text-black border-neutral-300'
                    }`}
                  >
                    <CheckCircle2 className={`w-3 h-3 ${isDark ? 'text-white' : 'text-black'}`} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
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

          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-extrabold transition-colors shadow-sm ${
                isDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-black hover:bg-neutral-800 text-white shadow-black/20'
              }`}
            >
              <span>Verify on Official Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className={`text-xs font-bold italic ${isDark ? 'text-zinc-400' : 'text-neutral-500'}`}>
              Official Certificate Record
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
