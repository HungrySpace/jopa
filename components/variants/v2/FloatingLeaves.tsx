'use client';

import { useEffect, useRef } from 'react';

interface FloatingLeavesProps {
  fixed?: boolean;
}

export default function FloatingLeaves({ fixed = false }: FloatingLeavesProps) {
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

    interface Leaf {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
    }

    const colors = ['#C64632', '#C60550', '#F4C599', '#9AA988'];
    const leaves: Leaf[] = [];

    for (let i = 0; i < 30; i++) {
      leaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 8,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const drawLeaf = (x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.4, 0, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-size * 0.8, 0);
      ctx.lineTo(size * 0.8, 0);
      ctx.strokeStyle = color;
      ctx.shadowBlur = 10;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach((leaf) => {
        drawLeaf(leaf.x, leaf.y, leaf.size, leaf.rotation, leaf.color, leaf.opacity);

        leaf.x += leaf.speedX;
        leaf.y += leaf.speedY;
        leaf.rotation += leaf.rotationSpeed;

        const h = fixed ? window.innerHeight : document.documentElement.scrollHeight;
        if (leaf.y > h + 50) {
          leaf.y = -50;
          leaf.x = Math.random() * canvas.width;
        }
        if (leaf.x < -50) leaf.x = canvas.width + 50;
        if (leaf.x > canvas.width + 50) leaf.x = -50;
      });

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
