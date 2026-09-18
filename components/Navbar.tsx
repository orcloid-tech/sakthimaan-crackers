"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { shopInfo } from "@/lib/products";
import { CartIcon, PhoneIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Price List" },
  { href: "/#combos", label: "Combos" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-flame-500/30 bg-night-950/95 backdrop-blur supports-[backdrop-filter]:bg-night-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-flame-300 via-flame-500 to-flame-600 text-lg font-bold text-night-950 shadow-sm">
            SM
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-flame-gradient sm:text-xl">
              Sakthi Maan Crackers
            </span>
            <span className="font-tamil text-[11px] text-flame-300/80">சக்திமான் கிராக்கர்ஸ்</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cream/90 transition-colors hover:text-flame-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+91${shopInfo.phones[0]}`}
            className="hidden items-center gap-1.5 rounded-full border border-flame-500/40 px-3 py-1.5 text-sm font-medium text-flame-300 transition-colors hover:bg-flame-500/10 sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {shopInfo.phones[0]}
          </a>
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-flame-500/40 text-flame-300 transition-colors hover:bg-flame-500/10"
            aria-label="Enquiry list"
          >
            <CartIcon className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-flame-400 px-1 text-[11px] font-bold text-night-950">
                {count}
              </span>
            )}
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-flame-500/40 text-flame-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative block h-3.5 w-4">
              <span className="absolute inset-x-0 top-0 h-[1.5px] bg-current" />
              <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
              <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-flame-500/20 bg-night-950 px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-cream/90 hover:bg-flame-500/10 hover:text-flame-300"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:+91${shopInfo.phones[0]}`}
            className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-flame-300 hover:bg-flame-500/10"
          >
            <PhoneIcon className="h-4 w-4" /> {shopInfo.phones[0]}
          </a>
        </nav>
      )}
    </header>
  );
}
