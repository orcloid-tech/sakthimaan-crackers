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
      <div className="sticky top-[61px] z-30 border-b border-night-800/10 bg-[var(--background)]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="relative mb-3">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-night-950/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crackers by name or S.No..."
              className="w-full rounded-full border border-night-800/15 bg-white py-2.5 pl-10 pr-4 text-sm text-night-950 placeholder:text-night-950/40 focus:border-flame-500 focus:outline-none"
            />
          </div>
          <div className="chip-scroll flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCat("all")}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCat === "all"
                  ? "bg-night-800 text-flame-200"
                  : "bg-night-800/8 text-night-800 hover:bg-night-800/15"
              }`}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCat(c.slug)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCat === c.slug
                    ? "bg-night-800 text-flame-200"
                    : "bg-night-800/8 text-night-800 hover:bg-night-800/15"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 pb-28 sm:px-6">
        {visibleCategories.length === 0 ? (
          <p className="py-16 text-center text-sm text-night-950/50">
            No crackers found. Try a different search term.
          </p>
        ) : (
          visibleCategories.map((c) => <CategorySection key={c.slug} category={c} />)
        )}
      </div>

      <CartSummaryBar />
    </div>
  );
}
