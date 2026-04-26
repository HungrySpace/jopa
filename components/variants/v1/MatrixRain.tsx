'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  lightMode?: boolean;
}

export default function MatrixRain({ lightMode = false }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '🌿🌲🌱🌾🍀01アイウエオカキクケコ{}[]<>/\\|';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      if (lightMode) {
        ctx.fillStyle = 'rgba(252, 211, 197, 0.06)';
      } else {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isLeaf = ['🌿', '🍃', '🌲', '', '🌾', '🍀'].includes(text);
        
        if (lightMode) {
          if (isLeaf) {
            ctx.fillStyle = `rgba(87, 19, 16, ${Math.random() * 0.15 + 0.05})`;
          } else {
            ctx.fillStyle = `rgba(167, 41, 19, ${Math.random() * 0.12 + 0.04})`;
          }
        } else {
          if (isLeaf) {
            ctx.fillStyle = `rgba(167, 41, 19, ${Math.random() * 0.3 + 0.1})`;
          } else {
            ctx.fillStyle = `rgba(250, 169, 148, ${Math.random() * 0.4 + 0.1})`;
          }
        }
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [lightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
