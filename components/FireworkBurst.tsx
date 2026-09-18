function polar(cx: number, cy: number, angleDeg: number, r: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
}

function rayPath(cx: number, cy: number, angleDeg: number, length: number, bend: number) {
  const [ex, ey] = polar(cx, cy, angleDeg, length);
  const [mx, my] = polar(cx, cy, angleDeg, length * 0.55);
  const [cxp, cyp] = polar(mx, my, angleDeg + 90, bend);
  return `M${cx},${cy} Q${cxp.toFixed(1)},${cyp.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`;
}

const RAYS = [
  { angle: -64, length: 92, bend: -12, width: 2.6, opacity: 0.55 },
  { angle: -52, length: 112, bend: -9, width: 3.2, opacity: 0.75 },
  { angle: -40, length: 88, bend: -11, width: 2.4, opacity: 0.5 },
  { angle: -28, length: 122, bend: -7, width: 3.6, opacity: 0.85 },
  { angle: -15, length: 98, bend: -6, width: 2.6, opacity: 0.6 },
  { angle: -2, length: 128, bend: -4, width: 3.8, opacity: 0.9 },
  { angle: 11, length: 100, bend: 5, width: 2.6, opacity: 0.6 },
  { angle: 24, length: 118, bend: 7, width: 3.4, opacity: 0.8 },
  { angle: 37, length: 86, bend: 10, width: 2.3, opacity: 0.5 },
  { angle: 50, length: 108, bend: 11, width: 3, opacity: 0.7 },
  { angle: 63, length: 80, bend: 13, width: 2.2, opacity: 0.45 },
];

const SPARK_TIPS = [1, 3, 5, 8];

export default function FireworkBurst({
  id,
  className,
  colorCore,
  colorMid,
  colorTip,
}: {
  id: string;
  className?: string;
  colorCore: string;
  colorMid: string;
  colorTip: string;
}) {
  const cx = 110;
  const cy = 190;

  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="100%" r="65%">
          <stop offset="0%" stopColor={colorCore} stopOpacity="0.55" />
          <stop offset="100%" stopColor={colorCore} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-ray`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={colorCore} />
          <stop offset="55%" stopColor={colorMid} />
          <stop offset="100%" stopColor={colorTip} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <circle cx={cx} cy={cy} r="70" fill={`url(#${id}-glow)`} />

      {RAYS.map((r, i) => (
        <path
          key={i}
          d={rayPath(cx, cy, r.angle, r.length, r.bend)}
          stroke={`url(#${id}-ray)`}
          strokeWidth={r.width}
          strokeLinecap="round"
          fill="none"
          opacity={r.opacity}
        />
      ))}

      {SPARK_TIPS.map((idx) => {
        const r = RAYS[idx];
        const [ex, ey] = polar(cx, cy, r.angle, r.length + 3);
        return <circle key={idx} cx={ex} cy={ey} r="2.6" fill={colorTip} opacity={0.9} />;
      })}

      <circle cx={cx} cy={cy} r="4" fill={colorCore} />
    </svg>
  );
}
