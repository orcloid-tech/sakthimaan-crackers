"use client";

import Link from "next/link";
import { allProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function SpecialOffers() {
  const offerItems = [
    { sno: 173, badge: "FAMILY FAVORITE" }, // Middle Class Family Combo - 3500
    { sno: 174, badge: "SIVAKASI SPECIAL" }, // Sivakasi Sakthi Maan Special Combo - 5000
    { sno: 175, badge: "MEGA FESTIVAL" }, // Sakthi Maan Thala Deepavali Combo - 10000
    { sno: 172, badge: "BESTSELLER" }, // 41 Items Gift Box - 650
  ];

  const productsWithBadges = offerItems
    .map((item) => {
      const prod = allProducts.find((p) => p.sno === item.sno);
      return prod ? { ...prod, badgeText: item.badge } : null;
    })
    .filter(Boolean) as (typeof allProducts[0] & { badgeText: string })[];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6" id="offers">
      {/* Title matching reference image */}
      <div className="mb-8 text-center">
        <h2 className="text-xs font-black tracking-widest text-gold-gradient uppercase sm:text-sm">
          Special Offers
        </h2>
        <p className="mt-1 text-xs text-zinc-400">
          Handpicked family combo packs and premium festive gift assortments
        </p>
      </div>

      {/* 4 Cards Grid inside dark container */}
      <div className="rounded-3xl border border-zinc-800/80 bg-[#121217]/85 p-4 shadow-2xl backdrop-blur-sm sm:p-7">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productsWithBadges.map((p) => (
            <ProductCard
              key={`special-${p.sno}`}
              product={p}
              categorySlug={p.categorySlug}
              netRate={p.netRate}
              badgeText={p.badgeText}
            />
          ))}
        </div>

        {/* View All Combos pill button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/products?cat=combo-packs"
            className="rounded-full border border-zinc-600 bg-transparent px-7 py-2 text-xs font-bold tracking-widest text-zinc-300 uppercase transition-all hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.25)]"
          >
            Explore All Combos
          </Link>
        </div>
      </div>
    </section>
  );
}
