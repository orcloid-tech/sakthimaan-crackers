"use client";

import { useState } from "react";
import Link from "next/link";
import { allProducts, categories } from "@/lib/products";
import ProductCard from "./ProductCard";

// Handpicked 16 flagship items across popular categories to match reference 4x4 layout
const showcaseSnoList = [
  8, // Bullet Bomb
  21, // Flower Pots Special
  31, // Ground Chakkar Special
  157, // 12 Cm Electric Sparklers
  9, // Hydro Bomb
  35, // Disco Wheel
  139, // 7 Shot MultiColour
  173, // Middle Class Family Combo
  141, // 12 Shot MultiColour
  154, // 10 Cm Colour Sparklers
  27, // Mega Tri Colour Fountain
  5, // 5" Dragan Crackers
  39, // 1 1/2" Twinkling Star
  148, // Match Box - Classic Tap
  171, // 31 Items Gift Box
  176, // 100 Wala Garland
];

export default function FeaturedGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "ALL CRACKERS" },
    { id: "sparklers", label: "SPARKLERS" },
    { id: "flower-pots", label: "FLOWER POTS" },
    { id: "ground-chakkar", label: "GROUND CHAKKAR" },
    { id: "bomb-items", label: "BOMBS & SOUND" },
    { id: "multicolour-shots", label: "AERIAL SHOTS" },
    { id: "combo-packs", label: "FAMILY COMBOS" },
  ];

  const showcaseProducts = allProducts.filter((p) =>
    activeFilter === "all"
      ? showcaseSnoList.includes(p.sno)
      : p.categorySlug === activeFilter
  ).slice(0, 16);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6" id="showcase">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-xs font-black tracking-widest text-amber-400 uppercase sm:text-sm">
          Featured Crackers Showcase
        </h2>
        <p className="font-display mt-2 text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
          Popular Sivakasi Collections
        </p>
        <p className="font-tamil mt-1 text-sm text-amber-200/80">
          வகைவகையான தீபாவளி வெடிகள் — நேரடி தொழிற்சாலை தள்ளுபடி விலையில்
        </p>

        {/* Filter Chips */}
        <div className="chip-scroll mt-6 flex justify-start sm:justify-center gap-2 overflow-x-auto pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-all ${
                activeFilter === tab.id
                  ? "border border-amber-400 bg-amber-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                  : "border border-zinc-700/80 bg-[#16161c] text-zinc-300 hover:border-amber-400/50 hover:text-amber-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container styled exactly like reference image rounded dark frame */}
      <div className="rounded-3xl border border-zinc-800/80 bg-[#111116]/80 p-4 shadow-2xl backdrop-blur-sm sm:p-7">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {showcaseProducts.map((p) => (
            <ProductCard
              key={`${p.categorySlug}-${p.sno}`}
              product={p}
              categorySlug={p.categorySlug}
              netRate={p.netRate}
            />
          ))}
        </div>

        {/* Bottom CTA to view all products */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-zinc-800/80 pt-6">
          <p className="text-xs text-zinc-400">
            Showing {showcaseProducts.length} of {allProducts.length} items across {categories.length} categories
          </p>
          <Link
            href="/products"
            className="rounded-full border border-amber-400/80 bg-[#1a1a24] px-8 py-2.5 text-xs font-extrabold tracking-widest text-amber-300 uppercase shadow-md transition-all hover:bg-amber-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          >
            View Full Price List (180+ Items) →
          </Link>
        </div>
      </div>
    </section>
  );
}
