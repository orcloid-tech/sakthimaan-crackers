"use client";

import { useCart, productKey } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  categorySlug,
  netRate,
}: {
  product: Product;
  categorySlug: string;
  netRate?: boolean;
}) {
  const { lines, increment, decrement, setQty } = useCart();
  const key = productKey(categorySlug, product.sno);
  const qty = lines[key] ?? 0;
  const discountPct = netRate ? 0 : Math.round(100 - (product.offer / product.rate) * 100);

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-night-800/10 bg-white p-4 card-shadow transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-flame-500/40 hover:shadow-2xl hover:shadow-night-700/15">
      {/* shine sweep, clipped to the card's rounded shape */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -inset-y-6 left-[-40%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[130%] group-hover:opacity-100" />
      </div>

      {!netRate && discountPct > 0 && (
        <span className="absolute -top-2.5 -right-2.5 z-10 rounded-full bg-gradient-to-br from-night-700 to-night-800 px-2.5 py-1 text-[11px] font-bold text-flame-300 shadow-md ring-1 ring-flame-500/30 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
          {discountPct}% OFF
        </span>
      )}

      <div className="relative z-10">
        <span className="mb-2 inline-flex w-fit items-center rounded-full bg-night-950/5 px-2 py-0.5 text-[11px] font-semibold text-night-700">
          #{product.sno} · {product.per}
        </span>
        <h3 className="text-[15px] font-semibold leading-snug text-night-950">{product.name}</h3>
        <p className="font-tamil mt-0.5 text-[13px] text-night-700/70">{product.nameTa}</p>
      </div>

      <div className="relative z-10 mt-auto pt-3">
        <div className="flex items-end gap-2">
          {!netRate && (
            <span className="text-sm text-night-950/40 line-through">₹{product.rate}</span>
          )}
          <span className="text-xl font-bold text-night-800 transition-colors group-hover:text-flame-600">
            ₹{product.offer}
          </span>
          {netRate && <span className="pb-0.5 text-[11px] font-medium text-night-700/60">net rate</span>}
        </div>

        <div className="mt-4">
          {qty === 0 ? (
            <button
              onClick={() => increment(key)}
              className="w-full rounded-xl bg-night-800 py-2 text-sm font-semibold text-flame-200 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-night-700 hover:to-night-800 hover:shadow-lg hover:shadow-flame-500/20 active:scale-[0.97]"
            >
              + Add to List
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-night-800/20 bg-night-950/5 p-1">
              <button
                onClick={() => decrement(key)}
                aria-label="Decrease quantity"
                className="flex h-8 w-9 items-center justify-center rounded-lg text-lg font-bold text-night-800 transition-colors hover:bg-white"
              >
                −
              </button>
              <input
                type="number"
                min={0}
                value={qty}
                onChange={(e) => setQty(key, Math.max(0, Number(e.target.value) || 0))}
                className="w-10 bg-transparent text-center text-sm font-semibold text-night-950 outline-none"
              />
              <button
                onClick={() => increment(key)}
                aria-label="Increase quantity"
                className="flex h-8 w-9 items-center justify-center rounded-lg text-lg font-bold text-night-800 transition-colors hover:bg-white"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
