import React, { useEffect, useRef } from 'react';

export const HeroCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette configuration - deep violet accent (#6d28d9)
    const getColors = () => {
      return {
        dot: isDark ? 'rgba(167, 139, 250, 0.45)' : 'rgba(109, 40, 217, 0.35)',
        line: isDark ? '167, 139, 250' : '109, 40, 217',
        mouseLine: isDark ? '196, 181, 253' : '124, 58, 237'
      };
    };

    let colors = getColors();

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for perf
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = width < 860;
      // 60-70 dots on desktop, 25-30 on mobile
      const count = isMobile ? Math.floor(width * 0.04) + 15 : 65;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
          vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.55),
          radius: Math.random() * 1.5 + 1.2
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const maxDistance = 115;
    const maxMouseDistance = 145;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw dot-to-dot interconnect lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // If reduced motion is requested, do not update positions
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Gentle bounce at boundaries
          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        }

        // Draw connections with subsequent particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.16 : 0.11);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // 2. Mouse interactive connection
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < maxMouseDistance) {
            const mAlpha = (1 - mDist / maxMouseDistance) * (isDark ? 0.32 : 0.24);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colors.mouseLine}, ${mAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // 3. Draw Particle Node Dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.dot;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    resizeCanvas();
    render();

    window.addEventListener('resize', resizeCanvas, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
