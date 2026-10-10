"use client";

import Link from "next/link";
import { allProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function PriceReductions() {
  // Select 4 high-discount blockbuster crackers
  const reductionItems = [
    {
      sno: 7, // 6" Lion Crackers (5pcs) - Rate 800 -> 80 (90% off)
      badge: "SAVE 90%",
    },
    {
      sno: 146, // 120 Shot Multicolour - Rate 16000 -> 1600 (90% off)
      badge: "SPECIAL OFFER",
    },
    {
      sno: 24, // Colour Koti Deluxe (10pcs) - Rate 3500 -> 350 (90% off)
      badge: "LATEST PRICE",
    },
    {
      sno: 34, // Ground Chakkar Spinner Deluxe - Rate 1800 -> 180 (90% off)
      badge: "HOT DEAL",
    },
  ];

  const productsWithBadges = reductionItems
    .map((item) => {
      const prod = allProducts.find((p) => p.sno === item.sno);
      return prod ? { ...prod, badgeText: item.badge } : null;
    })
    .filter(Boolean) as (typeof allProducts[0] & { badgeText: string })[];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6" id="reductions">
      {/* Title matching reference image */}
      <div className="mb-8 text-center">
        <h2 className="text-xs font-black tracking-widest text-gold-gradient uppercase sm:text-sm">
          Latest Price Reductions
        </h2>
        <p className="mt-1 text-xs text-zinc-400">
          Direct factory wholesale rates on blockbuster festival favourites
        </p>
      </div>

      {/* 4 Cards Grid inside dark container */}
      <div className="rounded-3xl border border-zinc-800/80 bg-[#121217]/85 p-4 shadow-2xl backdrop-blur-sm sm:p-7">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productsWithBadges.map((p) => (
            <ProductCard
              key={`reduction-${p.sno}`}
              product={p}
              categorySlug={p.categorySlug}
              netRate={p.netRate}
              badgeText={p.badgeText}
            />
          ))}
        </div>

        {/* View All Reductions pill button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/products"
            className="rounded-full border border-zinc-600 bg-transparent px-7 py-2 text-xs font-bold tracking-widest text-zinc-300 uppercase transition-all hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.25)]"
          >
            View All Reductions
          </Link>
        </div>
      </div>
    </section>
  );
}
