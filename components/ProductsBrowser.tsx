"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "@/lib/products";
import CategorySection from "./CategorySection";
import CartSummaryBar from "./CartSummaryBar";
import { SearchIcon } from "./icons";

export default function ProductsBrowser() {
  const params = useSearchParams();
  const initialCat = params.get("cat") ?? "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState("");

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCat === "all" || c.slug === activeCat)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter(
              (i) =>
                i.name.toLowerCase().includes(q) ||
                i.nameTa.includes(query.trim()) ||
                String(i.sno) === q
            )
          : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [activeCat, query]);

  return (
    <div>
      <div className="sticky top-[69px] z-30 border-b border-zinc-800 bg-[#08080a]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6">
          <div className="relative mb-3">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 180+ crackers by name, Tamil name, or S.No (e.g. Hydro Bomb, பூச்சட்டி, 8)..."
              className="w-full rounded-full border border-zinc-700 bg-[#14141a] py-2.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 shadow-inner focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>
          <div className="chip-scroll flex gap-2 overflow-x-auto pb-1.5">
            <button
              onClick={() => setActiveCat("all")}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all uppercase ${
                activeCat === "all"
                  ? "border border-amber-400 bg-amber-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                  : "border border-zinc-800 bg-[#16161c] text-zinc-300 hover:border-amber-400/50 hover:text-amber-200"
              }`}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCat(c.slug)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all uppercase ${
                  activeCat === c.slug
                    ? "border border-amber-400 bg-amber-400 text-black shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                    : "border border-zinc-800 bg-[#16161c] text-zinc-300 hover:border-amber-400/50 hover:text-amber-200"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 pb-32 sm:px-6">
        {visibleCategories.length === 0 ? (
          <div className="rounded-3xl border border-zinc-800 bg-[#121217] py-20 text-center">
            <p className="text-base font-bold text-zinc-200">No crackers found matching &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-xs text-zinc-400">Try searching with a different name or number</p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCat("all");
              }}
              className="mt-4 rounded-full border border-amber-400 px-5 py-1.5 text-xs font-bold text-amber-300"
            >
              Reset Search
            </button>
          </div>
        ) : (
          visibleCategories.map((c) => <CategorySection key={c.slug} category={c} />)
        )}
      </div>

      <CartSummaryBar />
    </div>
  );
}
