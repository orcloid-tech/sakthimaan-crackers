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
    <div className="group relative flex flex-col rounded-2xl border border-maroon-800/10 bg-white p-4 card-shadow transition-shadow hover:shadow-md">
      {!netRate && discountPct > 0 && (
        <span className="absolute -top-2.5 -right-2.5 rounded-full bg-maroon-700 px-2.5 py-1 text-[11px] font-bold text-gold-300 shadow">
          {discountPct}% OFF
        </span>
      )}
      <span className="mb-2 inline-flex w-fit items-center rounded-full bg-maroon-950/5 px-2 py-0.5 text-[11px] font-semibold text-maroon-700">
        #{product.sno} · {product.per}
      </span>
      <h3 className="text-[15px] font-semibold leading-snug text-maroon-950">{product.name}</h3>
      <p className="font-tamil mt-0.5 text-[13px] text-maroon-700/70">{product.nameTa}</p>

      <div className="mt-3 flex items-end gap-2">
        {!netRate && (
          <span className="text-sm text-maroon-950/40 line-through">₹{product.rate}</span>
        )}
        <span className="text-xl font-bold text-maroon-800">₹{product.offer}</span>
        {netRate && <span className="pb-0.5 text-[11px] font-medium text-maroon-700/60">net rate</span>}
      </div>

      <div className="mt-4">
        {qty === 0 ? (
          <button
            onClick={() => increment(key)}
            className="w-full rounded-xl bg-maroon-800 py-2 text-sm font-semibold text-gold-200 transition-colors hover:bg-maroon-700"
          >
            + Add to List
          </button>
        ) : (
          <div className="flex items-center justify-between rounded-xl border border-maroon-800/20 bg-maroon-950/5 p-1">
            <button
              onClick={() => decrement(key)}
              aria-label="Decrease quantity"
              className="flex h-8 w-9 items-center justify-center rounded-lg text-lg font-bold text-maroon-800 hover:bg-white"
            >
              −
            </button>
            <input
              type="number"
              min={0}
              value={qty}
              onChange={(e) => setQty(key, Math.max(0, Number(e.target.value) || 0))}
              className="w-10 bg-transparent text-center text-sm font-semibold text-maroon-950 outline-none"
            />
            <button
              onClick={() => increment(key)}
              aria-label="Increase quantity"
              className="flex h-8 w-9 items-center justify-center rounded-lg text-lg font-bold text-maroon-800 hover:bg-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
