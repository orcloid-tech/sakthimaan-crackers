"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { shopInfo } from "@/lib/products";
import { CartIcon, PhoneIcon, SparkleIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "PRICE LIST" },
  { href: "/#showcase", label: "SHOWCASE" },
  { href: "/#reductions", label: "REDUCTIONS" },
  { href: "/#offers", label: "OFFERS" },
  { href: "/#enquiries", label: "CONTACT" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-[#08080a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Brand Logo matching reference golden style */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent shadow-[0_0_15px_rgba(245,197,24,0.25)] transition-transform group-hover:scale-105">
            <SparkleIcon className="h-6 w-6 text-amber-300 animate-sparkle" />
            <span className="absolute inset-0 rounded-full border border-amber-300/30 animate-ping opacity-25" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight text-gold-gradient sm:text-2xl animate-gold-glow">
              Sakthi Maan
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold tracking-widest text-amber-300/90 uppercase">
                Fireworks
              </span>
              <span className="text-amber-500/50">•</span>
              <span className="font-tamil text-[10px] text-zinc-400">
                சிவகாசி
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-wider text-zinc-300 transition-colors hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:+91${shopInfo.phones[0]}`}
            className="hidden items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 px-3.5 py-1.5 text-xs font-medium text-amber-200 transition-all hover:border-amber-400 hover:bg-amber-400/15 sm:flex"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-amber-300" />
            <span>{shopInfo.phones[0]}</span>
          </a>

          <a
            href={`https://wa.me/${shopInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 transition-all hover:bg-emerald-500/20 md:flex"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/cart"
            className="relative flex h-10 items-center gap-2 rounded-full border border-amber-400/40 bg-[#16161c] px-3.5 text-amber-300 transition-all hover:border-amber-300 hover:shadow-[0_0_15px_rgba(245,197,24,0.3)]"
            aria-label="Enquiry list"
          >
            <CartIcon className="h-4.5 w-4.5" />
            <span className="text-xs font-bold tracking-wide">LIST</span>
            {count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-1 text-[11px] font-black text-black shadow">
                {count}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-[#141418] text-amber-300 transition-colors hover:border-amber-400/50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute inset-x-0 top-0.5 h-0.5 bg-current transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-2 h-0.5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0.5 h-0.5 bg-current transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="flex flex-col gap-1.5 border-t border-amber-500/20 bg-[#0d0d12]/98 px-5 py-4 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold tracking-wide text-zinc-200 transition-colors hover:bg-amber-400/10 hover:text-amber-300"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-zinc-800 pt-3">
            <a
              href={`tel:+91${shopInfo.phones[0]}`}
              className="flex items-center gap-2 rounded-xl bg-amber-400/10 px-3 py-2 text-sm font-medium text-amber-200"
            >
              <PhoneIcon className="h-4 w-4 text-amber-300" /> Call {shopInfo.phones[0]}
            </a>
            <a
              href={`https://wa.me/${shopInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-400" /> Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
