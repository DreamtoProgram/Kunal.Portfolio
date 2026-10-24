import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SectionHeading = ({
  icon: Icon,
  title,
  subtitle,
  isDark = false,
  className = 'mb-10'
}) => {
  return (
    <div className={className}>
      <ScrollReveal direction="up" distance={18} duration={550}>
        <div className="flex items-center gap-3">
          {/* Animated Icon Bubble */}
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm portfolio-header-icon transition-all duration-300 ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-violet-400 shadow-black/40'
                : 'bg-neutral-100 border-neutral-300 text-violet-600 shadow-xs'
            }`}
          >
            {Icon && <Icon className="w-5 h-5 transition-transform duration-300" />}
          </div>

          {/* Section Title */}
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h2>
        </div>
      </ScrollReveal>

      {/* Optional Subtitle / Tagline */}
      {subtitle && (
        <ScrollReveal direction="up" distance={14} delay={100} duration={550}>
          <p
            className={`text-sm sm:text-base font-medium max-w-2xl mt-3 ${
              isDark ? 'text-zinc-400' : 'text-neutral-600'
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};
