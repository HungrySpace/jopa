'use client';

import { useEffect, useRef } from 'react';

interface VintageParticlesProps {
  fixed?: boolean;
}

export default function VintageParticles({ fixed = false }: VintageParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = fixed ? window.innerHeight : document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.1 - 0.05,
        opacity: Math.random() * 0.15 + 0.03,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.003,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
        const currentSize = p.size * (0.8 + 0.2 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = '#8B7355';
        ctx.globalAlpha = currentOpacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [fixed]);

  return (
    <canvas
      ref={canvasRef}
      className={fixed ? 'fixed inset-0 w-full h-full' : 'absolute inset-0 w-full h-full'}
      style={{ pointerEvents: 'none' }}
    />
  );
}
