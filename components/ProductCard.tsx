"use client";

import Image from "next/image";
import { useCart, productKey } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";

export default function ProductCard({
  product,
  categorySlug,
  netRate,
  badgeText,
}: {
  product: Product;
  categorySlug: string;
  netRate?: boolean;
  badgeText?: string;
}) {
  const { lines, increment, decrement, setQty } = useCart();
  const key = productKey(categorySlug, product.sno);
  const qty = lines[key] ?? 0;
  const discountPct = netRate ? 0 : Math.round(100 - (product.offer / product.rate) * 100);
  const imageSrc = getProductImage(categorySlug, product);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/80 bg-[#16161c] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,197,24,0.15)]">
      {/* Top Banner Tag (like reference image yellow tags) */}
      {(badgeText || (!netRate && discountPct > 0)) && (
        <div className="absolute top-2.5 right-2.5 z-20">
          <span className="rounded-full bg-yellow-400 px-2.5 py-0.5 text-[10px] font-black tracking-wider text-black uppercase shadow-md">
            {badgeText || `${discountPct}% OFF`}
          </span>
        </div>
      )}

      {/* Top Half: Crisp White Capsule Card for Product Photo */}
      <div className="relative aspect-square w-full overflow-hidden bg-white p-3 sm:p-5 flex items-center justify-center">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-108"
          />
        </div>
      </div>

      {/* Bottom Half: Sleek Dark Capsule Card */}
      <div className="flex flex-1 flex-col justify-between p-4 text-center sm:p-5">
        <div>
          {/* S.No and Packing */}
          <div className="mb-1.5 flex items-center justify-center gap-2">
            <span className="rounded-full bg-zinc-800/90 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-amber-300/90 uppercase">
              #{product.sno} · {product.per}
            </span>
          </div>

          {/* Product Name in bold caps */}
          <h3 className="line-clamp-2 text-xs sm:text-sm font-bold tracking-wide text-zinc-100 uppercase transition-colors group-hover:text-amber-300">
            {product.name}
          </h3>

          {/* Tamil Name */}
          <p className="font-tamil mt-1 line-clamp-1 text-xs text-amber-300/80">
            {product.nameTa}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="mt-4 pt-2">
          {/* Prices */}
          <div className="mb-3 flex items-baseline justify-center gap-2">
            {!netRate && (
              <span className="text-xs text-zinc-500 line-through">
                ₹{product.rate}
              </span>
            )}
            <span className="text-lg font-extrabold text-amber-400 sm:text-xl">
              ₹{product.offer}
            </span>
            {netRate && (
              <span className="text-[10px] font-medium text-zinc-400">
                (net rate)
              </span>
            )}
          </div>

          {/* Outline Pill Button matching reference image */}
          {qty === 0 ? (
            <button
              onClick={() => increment(key)}
              className="w-full rounded-full border border-zinc-600/90 bg-transparent py-1.5 px-4 text-xs font-bold tracking-wider text-zinc-200 uppercase transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.25)] active:scale-95"
            >
              + Add to List
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-full border border-amber-400/60 bg-[#1e1e26] p-1">
              <button
                onClick={() => decrement(key)}
                aria-label="Decrease quantity"
                className="flex h-7 w-8 items-center justify-center rounded-full text-base font-bold text-amber-300 transition-colors hover:bg-zinc-700/60"
              >
                −
              </button>
              <input
                type="number"
                min={0}
                value={qty}
                onChange={(e) => setQty(key, Math.max(0, Number(e.target.value) || 0))}
                className="w-10 bg-transparent text-center text-xs font-bold text-zinc-100 outline-none"
              />
              <button
                onClick={() => increment(key)}
                aria-label="Increase quantity"
                className="flex h-7 w-8 items-center justify-center rounded-full text-base font-bold text-amber-300 transition-colors hover:bg-zinc-700/60"
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
