import React from 'react';

export const AmbientBackground = ({ isDark = false, position = 'top-right' }) => {
  const isTopRight = position === 'top-right';

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Soft, ultra-faint violet gradient glow drifting slowly */}
      <div
        className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl home-blob-morph transition-opacity duration-700 ${
          isTopRight ? '-top-20 -right-20' : '-bottom-20 -left-20'
        } ${
          isDark ? 'opacity-25' : 'opacity-15'
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(109, 40, 217, 0.15) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(109, 40, 217, 0.35) 0%, rgba(147, 51, 234, 0.12) 50%, transparent 75%)'
        }}
      />

      {/* Subtle micro grid accent */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(#6d28d9_0.8px,transparent_0.8px)] [background-size:24px_24px] ${
          isDark ? 'opacity-[0.04]' : 'opacity-[0.025]'
        }`}
      />
    </div>
  );
};
