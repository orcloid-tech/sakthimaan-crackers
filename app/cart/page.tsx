"use client";

import Link from "next/link";
import { useCart, useCartItems } from "@/lib/cart-context";
import { shopInfo } from "@/lib/products";
import { CartIcon, WhatsAppIcon } from "@/components/icons";

export default function CartPage() {
  const items = useCartItems();
  const { increment, decrement, remove, clear, setQty } = useCart();

  const total = items.reduce((s, i) => s + i.qty * i.product.offer, 0);
  const mrpTotal = items.reduce((s, i) => s + i.qty * i.product.rate, 0);

  const buildMessage = () => {
    const lines = items.map(
      (i, idx) => `${idx + 1}. ${i.product.name} (${i.product.per}) x ${i.qty} = ₹${i.qty * i.product.offer}`
    );
    return encodeURIComponent(
      `Vanakkam ${shopInfo.nameEn}!\nI would like to order the following crackers:\n\n${lines.join(
        "\n"
      )}\n\nEstimated Total: ₹${total.toLocaleString("en-IN")}\n\nPlease confirm availability & delivery. Thank you!`
    );
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-maroon-800/10 text-maroon-800">
          <CartIcon className="h-7 w-7" />
        </span>
        <h1 className="font-display text-2xl font-bold text-maroon-950">Your enquiry list is empty</h1>
        <p className="mt-2 text-sm text-maroon-950/60">
          Browse our full price list and add the crackers you&apos;d like to enquire about.
        </p>
        <Link
          href="/products"
          className="mt-6 rounded-full bg-maroon-800 px-6 py-3 text-sm font-semibold text-gold-200 transition-colors hover:bg-maroon-700"
        >
          Browse Price List
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 pb-32 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-maroon-950">My Enquiry List</h1>
        <button onClick={clear} className="text-sm font-medium text-maroon-700/70 hover:text-maroon-800">
          Clear all
        </button>
      </div>

      <div className="space-y-3">
        {items.map(({ key, qty, product }) => (
          <div
            key={key}
            className="flex items-center gap-3 rounded-2xl border border-maroon-800/10 bg-white p-3 card-shadow sm:p-4"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-maroon-950">{product.name}</p>
              <p className="font-tamil truncate text-xs text-maroon-700/60">{product.nameTa}</p>
              <p className="mt-1 text-xs text-maroon-950/50">
                {product.per} · ₹{product.offer} each
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-xl border border-maroon-800/15 bg-maroon-950/5 p-1">
              <button
                onClick={() => decrement(key)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-lg font-bold text-maroon-800 hover:bg-white"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                type="number"
                min={0}
                value={qty}
                onChange={(e) => setQty(key, Math.max(0, Number(e.target.value) || 0))}
                className="w-8 bg-transparent text-center text-sm font-semibold text-maroon-950 outline-none"
              />
              <button
                onClick={() => increment(key)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-lg font-bold text-maroon-800 hover:bg-white"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <p className="w-16 shrink-0 text-right text-sm font-bold text-maroon-800">
              ₹{qty * product.offer}
            </p>

            <button
              onClick={() => remove(key)}
              aria-label="Remove item"
              className="shrink-0 text-maroon-950/40 hover:text-maroon-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-maroon-800/10 bg-white p-5 card-shadow sm:p-6">
        <div className="flex items-center justify-between text-sm text-maroon-950/60">
          <span>MRP Total</span>
          <span className="line-through">₹{mrpTotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-lg font-bold text-maroon-950">
          <span>Estimated Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
        <p className="mt-1 text-xs text-maroon-950/50">Final pricing &amp; availability will be confirmed over WhatsApp / call.</p>

        <a
          href={`https://wa.me/${shopInfo.whatsapp}?text=${buildMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send Enquiry via WhatsApp
        </a>
        <Link
          href="/products"
          className="mt-3 block text-center text-sm font-medium text-maroon-700 hover:text-maroon-800"
        >
          + Add more items
        </Link>
      </div>
    </div>
  );
}
