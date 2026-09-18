const PIECES = [
  { top: "14%", left: "9%", rotate: -25, color: "var(--orange-400)", w: 10, h: 4 },
  { top: "10%", left: "58%", rotate: 40, color: "var(--pink-400)", w: 9, h: 4 },
  { top: "28%", left: "86%", rotate: -10, color: "var(--orange-400)", w: 8, h: 4 },
  { top: "48%", left: "5%", rotate: 60, color: "var(--flame-300)", w: 9, h: 4 },
  { top: "62%", left: "92%", rotate: -35, color: "var(--pink-400)", w: 8, h: 3.5 },
  { top: "8%", left: "35%", rotate: 15, color: "var(--flame-300)", w: 7, h: 3 },
  { top: "72%", left: "16%", rotate: -50, color: "var(--orange-400)", w: 8, h: 3.5 },
];

export default function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-sm opacity-70"
          style={{
            top: p.top,
            left: p.left,
            width: p.w,
            height: p.h,
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
