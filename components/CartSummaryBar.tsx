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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-flame-500/30 bg-night-950/97 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 text-cream">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-flame-500/15 text-flame-300">
            <CartIcon className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-flame-400 px-1 text-[11px] font-bold text-night-950">
              {count}
            </span>
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{count} item{count > 1 ? "s" : ""} selected</p>
            <p className="text-xs text-flame-300/80">Approx. total ₹{total.toLocaleString("en-IN")}</p>
          </div>
        </div>
        <Link
          href="/cart"
          className="rounded-full bg-gradient-to-br from-flame-300 via-flame-500 to-flame-600 px-5 py-2.5 text-sm font-bold text-night-950 shadow transition-transform hover:scale-[1.03]"
        >
          View Enquiry List →
        </Link>
      </div>
    </div>
  );
}
