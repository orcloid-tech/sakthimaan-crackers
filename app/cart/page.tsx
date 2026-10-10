"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart, useCartItems } from "@/lib/cart-context";
import { shopInfo } from "@/lib/products";
import { CartIcon, WhatsAppIcon } from "@/components/icons";
import { getProductImage } from "@/lib/product-images";

export default function CartPage() {
  const items = useCartItems();
  const { increment, decrement, remove, clear, setQty } = useCart();

  const total = items.reduce((s, i) => s + i.qty * i.product.offer, 0);
  const mrpTotal = items.reduce((s, i) => s + i.qty * i.product.rate, 0);
  const totalSavings = mrpTotal - total;

  const buildMessage = () => {
    const lines = items.map(
      (i, idx) =>
        `${idx + 1}. ${i.product.name} (${i.product.per}) x ${i.qty} = ₹${i.qty * i.product.offer}`
    );
    return encodeURIComponent(
      `Vanakkam ${shopInfo.nameEn}!\nI would like to place an enquiry for the following Deepavali crackers:\n\n${lines.join(
        "\n"
      )}\n\nEstimated Total: ₹${total.toLocaleString(
        "en-IN"
      )}\n\nPlease confirm availability & delivery to my location. Thank you!`
    );
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-28 text-center">
        <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
          <CartIcon className="h-9 w-9" />
        </span>
        <h1 className="font-display text-2xl font-extrabold text-zinc-100 sm:text-3xl">
          Your Enquiry List is Empty
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400">
          Browse our full price list of 180+ crackers and add items to your festive list.
        </p>
        <Link
          href="/products"
          className="mt-7 rounded-full border border-amber-400 bg-amber-400 px-8 py-3 text-xs font-extrabold tracking-wider text-black uppercase shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all hover:scale-105"
        >
          Browse Price List
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 pb-36 sm:px-6">
      <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-gold-gradient">
            My Enquiry List
          </h1>
          <p className="font-tamil mt-1 text-xs text-amber-300/80">
            தேர்வு செய்த வெடிகள் — {items.length} பொருட்கள்
          </p>
        </div>
        <button
          onClick={clear}
          className="text-xs font-semibold text-zinc-400 hover:text-rose-400 transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-3.5">
        {items.map(({ key, qty, product, categorySlug }) => {
          const img = getProductImage(categorySlug, product);
          return (
            <div
              key={key}
              className="flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-[#121217] p-3 sm:p-4 shadow-md transition-all hover:border-amber-400/30"
            >
              {/* Product Thumbnail */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs sm:text-sm font-bold text-zinc-100 uppercase">
                  {product.name}
                </p>
                <p className="font-tamil truncate text-[11px] text-amber-300/80">
                  {product.nameTa}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-zinc-400">
                  <span>{product.per}</span>
                  <span>•</span>
                  <span className="font-bold text-amber-400">₹{product.offer} each</span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-1 rounded-full border border-zinc-700 bg-[#1a1a22] p-1">
                <button
                  onClick={() => decrement(key)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-amber-300 hover:bg-zinc-700"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  min={0}
                  value={qty}
                  onChange={(e) => setQty(key, Math.max(0, Number(e.target.value) || 0))}
                  className="w-8 bg-transparent text-center text-xs font-bold text-zinc-100 outline-none"
                />
                <button
                  onClick={() => increment(key)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-amber-300 hover:bg-zinc-700"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <p className="w-16 shrink-0 text-right text-xs sm:text-sm font-extrabold text-amber-400">
                ₹{qty * product.offer}
              </p>

              {/* Remove */}
              <button
                onClick={() => remove(key)}
                aria-label="Remove item"
                className="shrink-0 p-1 text-zinc-500 hover:text-rose-400 transition-colors"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      <div className="mt-10 rounded-3xl border border-zinc-800 bg-[#14141a] p-6 shadow-2xl backdrop-blur-md sm:p-8">
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-zinc-400">
            <span>Total MRP</span>
            <span className="line-through">₹{mrpTotal.toLocaleString("en-IN")}</span>
          </div>
          {totalSavings > 0 && (
            <div className="flex items-center justify-between text-emerald-400 font-semibold">
              <span>Your Savings (Up to 90% Off)</span>
              <span>− ₹{totalSavings.toLocaleString("en-IN")}</span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-base sm:text-lg font-extrabold text-zinc-100">
            <span>Estimated Total</span>
            <span className="text-xl sm:text-2xl text-amber-400">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-zinc-400">
          Final pricing, quantity confirmation &amp; transport details will be coordinated directly over WhatsApp.
        </p>

        <a
          href={`https://wa.me/${shopInfo.whatsapp}?text=${buildMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider text-black uppercase shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] active:scale-98"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send Order Enquiry on WhatsApp
        </a>

        <Link
          href="/products"
          className="mt-4 block text-center text-xs font-semibold text-amber-300/80 hover:text-amber-200"
        >
          + Add more items from Price List
        </Link>
      </div>
    </div>
  );
}
