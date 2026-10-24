import React, { useRef, useState, useEffect, useCallback } from 'react';

export const TiltCard = ({
  children,
  className = '',
  maxTilt = 8, // subtle max tilt in degrees (8-10deg)
  scale = 1.015,
  perspective = 1000,
  glow = true,
  isDark = false
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef(null);

  // Check mobile / tablet (< 860px) and reduced motion
  useEffect(() => {
    const checkDisabled = () => {
      const isNarrow = window.innerWidth < 860;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(isNarrow || prefersReduced);
    };
    checkDisabled();
    window.addEventListener('resize', checkDisabled, { passive: true });
    return () => window.removeEventListener('resize', checkDisabled);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile || !cardRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`
      );
    });
  }, [isMobile, maxTilt, perspective, scale]);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: isMobile ? undefined : transform,
        transformStyle: isMobile ? undefined : 'preserve-3d'
      }}
    >
      {/* Optional subtle ambient violet glow behind card on hover */}
      {glow && isHovered && !isMobile && (
        <div
          className="absolute -inset-1 rounded-2xl blur-lg pointer-events-none transition-opacity duration-300 opacity-60 dark:opacity-40"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(109, 40, 217, 0.25) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};
