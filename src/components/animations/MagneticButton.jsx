import React, { useRef, useState, useEffect, useCallback } from 'react';

export const MagneticButton = ({
  children,
  className = '',
  maxOffset = 6, // subtle magnetic pull in px (5-6px)
  strength = 0.2,
  shine = true,
  glow = true,
  as: Component = 'div',
  ...rest
}) => {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef(null);

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
    if (isMobile || !btnRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;

      setOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, dx)),
        y: Math.max(-maxOffset, Math.min(maxOffset, dy))
      });
    });
  }, [isMobile, maxOffset, strength]);

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const shineClass = shine ? 'home-btn-shine' : '';
  const glowClass = glow ? 'home-btn-glow' : '';

  return (
    <Component
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block transition-transform duration-200 ease-out will-change-transform ${shineClass} ${glowClass} ${className}`}
      style={{
        transform: isMobile ? undefined : `translate3d(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px, 0)`
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
