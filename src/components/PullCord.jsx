import React, { useState, useEffect, useRef, useCallback } from 'react';
import { playSwitchSound, playTensionSound } from '../utils/soundEffects';

export const PullCord = ({ isDark, onToggleTheme }) => {
  const [pullY, setPullY] = useState(0);
  const [pullX, setPullX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const startPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const animationFrameRef = useRef(null);
  const handleRef = useRef(null);

  // Detect mobile screen width for optimal responsive cord physics & positioning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseHeight = isMobile ? 52 : 110; // Resting string length in px (compact on mobile to prevent hero overlap)
  const maxPullY = isMobile ? 60 : 90;    // Maximum pull stretch in px
  const maxPullX = isMobile ? 30 : 50;    // Maximum horizontal sway in px
  const triggerThreshold = isMobile ? 30 : 48; // Pull distance needed to toggle

  // Check if reduced motion is preferred
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
    const handleChange = (e) => {
      prefersReducedMotion.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Spring physics rebound animation
  const runSpringAnimation = useCallback((initialX = 0, initialY = 0) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (prefersReducedMotion.current) {
      setPullX(0);
      setPullY(0);
      return;
    }

    let posX = initialX;
    let posY = initialY;
    let velX = -initialX * 0.22;
    let velY = -12;

    const springK = 0.26;
    const damp = 0.72;
    const pendulumK = 0.18;
    const pendulumDamp = 0.78;

    const tick = () => {
      const forceY = -springK * posY;
      velY = (velY + forceY) * damp;
      posY += velY;

      const forceX = -pendulumK * posX;
      velX = (velX + forceX) * pendulumDamp;
      posX += velX;

      if (
        Math.abs(posY) < 0.2 &&
        Math.abs(velY) < 0.2 &&
        Math.abs(posX) < 0.2 &&
        Math.abs(velX) < 0.2
      ) {
        setPullX(0);
        setPullY(0);
        return;
      }

      setPullX(posX);
      setPullY(posY);
      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  }, []);

  // Flash illumination effect on toggle
  const triggerFlash = useCallback(() => {
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 240);
  }, []);

  // Unified Pointer Event Handlers
  const handlePointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (e.target.setPointerCapture) {
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch (err) {
        // Fallback
      }
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    startPosRef.current = { x: e.clientX, y: e.clientY };
    currentPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();

    const deltaY = Math.max(0, e.clientY - startPosRef.current.y);
    const deltaX = e.clientX - startPosRef.current.x;

    // Logarithmic easing for physical tension feel
    const tension = Math.min(1, deltaY / (maxPullY * 1.5));
    if (tension > 0.35 && tension < 0.4) {
      playTensionSound();
    }

    const currentY = Math.min(maxPullY, deltaY * 0.85);
    const currentX = Math.max(-maxPullX, Math.min(maxPullX, deltaX * 0.45));

    setPullY(currentY);
    setPullX(currentX);
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();

    if (e.target.hasPointerCapture && e.target.hasPointerCapture(e.pointerId)) {
      try {
        e.target.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Fallback
      }
    }

    const finalY = pullY;
    const finalX = pullX;

    isDraggingRef.current = false;
    setIsDragging(false);

    // Trigger toggle if pulled past threshold
    if (finalY >= triggerThreshold) {
      playSwitchSound();
      triggerFlash();
      onToggleTheme();
      runSpringAnimation(finalX * 0.4, 25);
    } else {
      runSpringAnimation(finalX, finalY);
    }
  };

  // Keyboard accessibility (Space or Enter to pull)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPullY(triggerThreshold + 10);
      playSwitchSound();
      triggerFlash();
      onToggleTheme();
      setTimeout(() => {
        runSpringAnimation(0, triggerThreshold + 10);
      }, 100);
    }
  };

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Bézier Curve Parameters
  const originX = 80;
  const originY = 0;
  const totalLength = baseHeight + pullY;
  const endX = originX + pullX;
  const endY = totalLength;

  // Natural physics curve computation
  const ctrlX1 = originX + pullX * 0.25 + Math.sin(pullY * 0.08) * 1.5;
  const ctrlY1 = totalLength * 0.42;
  const ctrlX2 = originX + pullX * 0.75 - Math.cos(pullY * 0.08) * 1.5;
  const ctrlY2 = totalLength * 0.76;

  const cordPath = `M ${originX} ${originY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;

  return (
    <div
      className="fixed top-0 right-28 sm:right-10 md:right-16 lg:right-20 z-[100] select-none pointer-events-auto"
      role="region"
      aria-label="Theme switch pull cord"
    >
      {/* SVG Container for String Line */}
      <div className="relative w-[160px] -ml-[80px] h-0 overflow-visible pointer-events-none">
        <svg
          width="160"
          height={totalLength + 40}
          className="overflow-visible pointer-events-none"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Ceiling Anchor Point (Seamlessly Centered at Origin) */}
          <circle
            cx={originX}
            cy="0.5"
            r="2"
            fill={isDark ? '#ffffff' : '#000000'}
          />

          {/* Thin, Slender, Delicate Thread Line in Pure Black & White */}
          <path
            d={cordPath}
            fill="none"
            stroke={isDark ? '#ffffff' : '#000000'}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Tactile Pull Handle Knob - Attached at (endX, endY) with 0px gap */}
        <div
          ref={handleRef}
          tabIndex={0}
          role="button"
          aria-label={`Pull cord to switch to ${isDark ? 'light' : 'dark'} mode`}
          aria-pressed={isDark}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'absolute',
            top: `${endY}px`,
            left: `${endX}px`,
            transform: 'translate(-50%, 0)',
            touchAction: 'none',
          }}
          className={`pointer-events-auto cursor-grab active:cursor-grabbing flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-black rounded-full transition-transform duration-75 ${
            isDragging ? 'scale-110' : isHovered ? 'scale-105' : 'scale-100'
          }`}
          title={isDark ? "Pull cord to switch to Light Mode" : "Pull cord to switch to Dark Mode"}
        >
          {/* Top connection ring securely binding thread to knob */}
          <div
            className={`w-1.5 h-0.5 rounded-t-sm -mb-0.5 z-10 transition-colors duration-300 ${
              isDark ? 'bg-zinc-400' : 'bg-neutral-600'
            }`}
          ></div>

          {/* 3D Circular Pearl Handle */}
          <div className="relative flex items-center justify-center">
            {/* Ambient Aura on Hover/Pull */}
            <div
              className={`absolute inset-0 -m-1 rounded-full blur-xs transition-opacity duration-300 ${
                showFlash
                  ? isDark ? 'bg-white opacity-100 scale-125' : 'bg-black opacity-40 scale-125'
                  : isHovered || isDragging
                    ? isDark
                      ? 'bg-white/40 opacity-100'
                      : 'bg-black/20 opacity-100'
                    : 'opacity-0'
              }`}
            ></div>

            {/* Circular Tactile Bead - Minimal & Sleek */}
            <div
              className={`w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full shadow-md border flex items-center justify-center relative z-10 transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-white via-zinc-100 to-zinc-200 border-zinc-300 shadow-black/50'
                  : 'bg-gradient-to-b from-white via-neutral-100 to-neutral-200 border-neutral-400 shadow-neutral-900/20'
              }`}
            >
              {/* Highlight gleam */}
              <div className="w-1.5 h-1 rounded-full bg-white -mt-1 -ml-0.5"></div>
              {/* Center mode jewel */}
              <div
                className={`absolute w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isDark ? 'bg-zinc-950' : 'bg-black'
                }`}
              ></div>
            </div>
          </div>

          {/* Handwritten "Pull the cord!" Instruction - Desktop & Tablet Only to prevent overlapping mobile hero text */}
          <div className="hidden sm:flex absolute right-full mr-2.5 top-1/2 -translate-y-1/2 items-center pointer-events-none opacity-90 transition-transform duration-200">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span
                className={`font-handwriting text-xs sm:text-sm font-bold tracking-normal select-none transition-colors duration-300 ${
                  isDark ? 'text-zinc-300' : 'text-black'
                }`}
              >
                Pull the cord!
              </span>

              {/* Small delicate curved arrow */}
              <svg
                width="20"
                height="15"
                viewBox="0 0 28 20"
                fill="none"
                className={`transform transition-colors duration-300 ${
                  isDark ? 'text-zinc-300' : 'text-black'
                }`}
              >
                <path
                  d="M2 15 C 8 15, 16 13, 22 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M17 4 L 23 5 L 20 11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
