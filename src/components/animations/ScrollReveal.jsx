import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 600,
  distance = 24,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  scale = 1,
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Immediate display if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) observer.unobserve(entry.target);
      } else if (!once) {
        setIsVisible(false);
      }
    }, { threshold, rootMargin });

    const currentEl = domRef.current;
    if (currentEl) observer.observe(currentEl);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [threshold, rootMargin, once]);

  // Initial and final transform styles
  const getTransform = () => {
    if (isVisible) return 'none';
    let translate = '';
    if (direction === 'up') translate = `translateY(${distance}px)`;
    else if (direction === 'down') translate = `translateY(-${distance}px)`;
    else if (direction === 'left') translate = `translateX(${distance}px)`;
    else if (direction === 'right') translate = `translateX(-${distance}px)`;

    const scaleTransform = scale !== 1 ? ` scale(${scale})` : '';
    return `${translate}${scaleTransform}`.trim() || 'none';
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};
