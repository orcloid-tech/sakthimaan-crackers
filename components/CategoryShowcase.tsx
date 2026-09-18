import Link from "next/link";
import { categories } from "@/lib/products";

const emoji: Record<string, string> = {
  "flash-light-sound": "💥",
  "bomb-items": "🧨",
  "bijli-crackers": "⚡",
  "flower-pots": "🌺",
  "tri-colour-fountain": "⛲",
  "ground-chakkar": "🌀",
  "wheel-crackers": "🎡",
  "twinkling-star": "✨",
  "kids-special": "🧸",
  "rocket-items": "🚀",
  "mini-colour-fountain": "🎇",
  "multi-colour-fountain-3": "🎆",
  "multi-colour-fountain-4": "🎆",
  "fruit-series-fountain": "🍎",
  "multi-step-fountain": "🐍",
  "peacock-crackers": "🦚",
  "tin-crackers": "🥫",
  "musical-fountain": "🎵",
  "fantasy-fountain": "🎭",
  "aerial-fancy": "🎉",
  "multicolour-shots": "🌈",
  "match-boxes": "🔥",
  "special-sparklers": "🍭",
  sparklers: "🪄",
  "gift-boxes": "🎁",
  "combo-packs": "📦",
  "festival-garlands": "🪔",
};

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" id="categories">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-maroon-950">Shop by Category</h2>
        <p className="font-tamil mt-2 text-sm text-maroon-700/70">வகைவகையான கிராக்கர்ஸ் ஒரே இடத்தில்</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/products?cat=${c.slug}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-maroon-800/10 bg-white p-4 text-center card-shadow transition-all hover:-translate-y-0.5 hover:border-gold-500/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-maroon-800/5 to-gold-500/10 text-2xl transition-transform group-hover:scale-110">
              {emoji[c.slug] ?? "🎇"}
            </span>
            <span className="text-xs font-semibold leading-snug text-maroon-950">{c.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
