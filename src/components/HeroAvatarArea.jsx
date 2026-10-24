import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

const SKILL_CHIPS = [
  { name: 'Python', angle: 0 },
  { name: 'SQL', angle: 72 },
  { name: 'PyTorch', angle: 144 },
  { name: 'Data Pipelines', angle: 216 },
  { name: 'LLMs', angle: 288 }
];

export const HeroAvatarArea = ({ isDark }) => {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive screen check: disable 3D tilt on mobile (< 860px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);

    // Subtle 3D tilt (max ~14 deg)
    const targetX = -Math.max(-1, Math.min(1, dy)) * 14;
    const targetY = Math.max(-1, Math.min(1, dx)) * 14;

    setTilt({ x: targetX, y: targetY });
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Orbital radius responsive to screen width
  const orbitRadius = isMobile ? 142 : 182;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center select-none"
      style={{
        perspective: '1000px'
      }}
      aria-label="Profile showcase"
    >
      {/* 3D Tilt Wrapper */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: isMobile
            ? 'none'
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 1. Behind Photo: Blurred Violet Gradient Blob (Slowly morphs and drifts) */}
        <div
          className="absolute -inset-4 sm:-inset-8 rounded-full blur-2xl sm:blur-3xl home-blob-morph pointer-events-none opacity-70 dark:opacity-60 transition-opacity duration-500"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(109, 40, 217, 0.25) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(109, 40, 217, 0.35) 0%, rgba(147, 51, 234, 0.18) 50%, transparent 75%)'
          }}
          aria-hidden="true"
        />

        {/* 2. Ring 1: Clockwise Rotating Dashed Ring (28s loop) */}
        <div
          className="absolute w-[295px] h-[295px] sm:w-[335px] sm:h-[335px] lg:w-[365px] lg:h-[365px] rounded-full border border-dashed border-violet-500/35 dark:border-violet-400/35 home-ring-spin-cw pointer-events-none"
          aria-hidden="true"
        />

        {/* 3. Ring 2: Counter-Clockwise Rotating Dotted Ring (40s loop) */}
        <div
          className="absolute w-[325px] h-[325px] sm:w-[365px] sm:h-[365px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-dotted border-violet-600/25 dark:border-violet-300/25 home-ring-spin-ccw pointer-events-none"
          aria-hidden="true"
        />

        {/* 4. Five Orbiting Skill Chips (Circular track + Counter-rotation so text stays upright) */}
        <div
          className="absolute w-[284px] h-[284px] sm:w-[364px] sm:h-[364px] pointer-events-none home-orbit-track"
          aria-hidden="true"
        >
          {SKILL_CHIPS.map((chip) => {
            const rad = (chip.angle * Math.PI) / 180;
            // Center is (50%, 50%), offset by (cos(rad)*R, sin(rad)*R)
            const x = Math.cos(rad) * orbitRadius;
            const y = Math.sin(rad) * orbitRadius;

            return (
              <div
                key={chip.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                {/* Counter-rotating child element preserves upright text orientation */}
                <div className="home-orbit-chip-upright">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11.5px] font-extrabold tracking-tight shadow-md backdrop-blur-md border transition-colors ${
                      isDark
                        ? 'bg-zinc-950/90 text-zinc-100 border-violet-500/40 shadow-black/60'
                        : 'bg-white/95 text-zinc-900 border-violet-300/70 shadow-violet-900/10'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 shrink-0" />
                    <span>{chip.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Center Profile Photo (Pop-in entrance on load + 6s gentle floating loop) */}
        <div className="home-photo-enter">
          <div className="home-float-idle">
            <div className="relative group">
              {/* Outer Subtle Ambient Ring */}
              <div
                className={`absolute -inset-2 rounded-full blur-sm opacity-40 transition duration-500 group-hover:opacity-75 ${
                  isDark ? 'bg-violet-500' : 'bg-violet-600'
                }`}
              />

              {/* Avatar Frame with Pristine Circular Profile Image */}
              <div
                className={`relative w-60 h-60 sm:w-68 sm:h-68 lg:w-[295px] lg:h-[295px] rounded-full p-2 border-2 transition-transform duration-300 group-hover:scale-102 ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-700 shadow-2xl shadow-black'
                    : 'bg-neutral-100 border-black shadow-xl shadow-neutral-900/10'
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-200">
                  <img
                    src="/profile.png"
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-center select-none"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
