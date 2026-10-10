"use client";

import Link from "next/link";
import { useCartItems } from "@/lib/cart-context";
import { CartIcon } from "./icons";

export default function CartSummaryBar() {
  const items = useCartItems();
  if (items.length === 0) return null;

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.product.offer, 0);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-400/30 bg-[#0d0d14]/95 backdrop-blur-md shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">
            <CartIcon className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-1 text-[11px] font-black text-black shadow">
              {count}
            </span>
          </span>
          <div className="leading-tight">
            <p className="text-xs sm:text-sm font-bold text-zinc-100">
              {count} cracker{count > 1 ? "s" : ""} in list
            </p>
            <p className="text-[11px] sm:text-xs font-semibold text-amber-400">
              Estimated Total: ₹{total.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
        <Link
          href="/cart"
          className="rounded-full border border-amber-400 bg-amber-400 px-6 py-2.5 text-xs font-extrabold tracking-wider text-black uppercase shadow-[0_0_15px_rgba(250,204,21,0.35)] transition-all hover:scale-105 active:scale-95"
        >
          View Enquiry List →
        </Link>
      </div>
    </div>
  );
}
