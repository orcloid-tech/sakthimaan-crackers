"use client";

import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

export default function SparklesBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate deterministic yet scattered floating sparkles
    const count = 35;
    const generated: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3.5 + 1.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    setSparkles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `sparkle-pulse ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      {/* Background ambient golden bokeh glows */}
      <div className="absolute top-[5%] right-[10%] h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute top-[40%] left-[5%] h-[300px] w-[300px] rounded-full bg-yellow-500/8 blur-[100px]" />
      <div className="absolute top-[75%] right-[15%] h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[130px]" />
    </div>
  );
}
