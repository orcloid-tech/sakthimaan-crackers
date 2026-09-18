import Link from "next/link";
import { findCategory } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ComboHighlight() {
  const combos = findCategory("combo-packs");
  const gifts = findCategory("gift-boxes");
  if (!combos || !gifts) return null;

  return (
    <section id="combos" className="bg-night-950/[0.03] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-3xl font-bold text-night-950">Ready-Made Family Combos</h2>
            <p className="font-tamil mt-2 text-sm text-night-700/70">குடும்பத்திற்கான காம்போ &amp; கிப்ட் பாக்ஸ்</p>
          </div>
          <Link
            href="/products?cat=combo-packs"
            className="text-sm font-semibold text-night-800 hover:text-night-600"
          >
            See all combos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {combos.items.map((item) => (
            <ProductCard key={item.sno} product={item} categorySlug={combos.slug} netRate={combos.netRate} />
          ))}
          {gifts.items.map((item) => (
            <ProductCard key={item.sno} product={item} categorySlug={gifts.slug} netRate={gifts.netRate} />
          ))}
        </div>
      </div>
    </section>
  );
}
