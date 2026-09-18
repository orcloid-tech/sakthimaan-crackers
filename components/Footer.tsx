import Link from "next/link";
import { shopInfo, categories } from "@/lib/products";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-flame-500/20 bg-night-950 text-cream/85">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-flame-300 via-flame-500 to-flame-600 text-lg font-bold text-night-950">
                SM
              </span>
              <div>
                <p className="font-display text-lg font-bold text-flame-gradient">Sakthi Maan Crackers</p>
                <p className="font-tamil text-xs text-flame-300/80">சக்திமான் கிராக்கர்ஸ்</p>
              </div>
            </div>
            <p className="mt-4 font-tamil text-sm text-flame-200/70">&ldquo;{shopInfo.tagline}&rdquo;</p>
            <p className="mt-2 text-sm text-cream/60">
              Direct from Sivakasi — premium quality crackers for wholesale &amp; retail, delivered with trust
              this Deepavali.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-flame-300 uppercase">Categories</p>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link href={`/products?cat=${c.slug}`} className="text-cream/70 hover:text-flame-300">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="font-medium text-flame-300 hover:text-flame-200">
                  View all 27 categories →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-flame-300 uppercase">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-cream/70 hover:text-flame-300">
                  Full Price List
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-cream/70 hover:text-flame-300">
                  My Enquiry List
                </Link>
              </li>
              <li>
                <Link href="/products?cat=combo-packs" className="text-cream/70 hover:text-flame-300">
                  Family Combo Packs
                </Link>
              </li>
              <li>
                <Link href="/products?cat=gift-boxes" className="text-cream/70 hover:text-flame-300">
                  Gift Boxes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-flame-300 uppercase">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-cream/70">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame-400" />
                {shopInfo.address}
              </li>
              {shopInfo.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:+91${p}`} className="flex items-center gap-2 text-cream/70 hover:text-flame-300">
                    <PhoneIcon className="h-4 w-4 shrink-0 text-flame-400" />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${shopInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/70 hover:text-flame-300"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-flame-500/15 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Sakthi Maan Crackers, Thayilpatti, Sivakasi. All rights reserved.</p>
          <p>
            As per Supreme Court guidelines, crackers are sold only for use during permitted hours &amp; green
            crackers are recommended.
          </p>
        </div>
      </div>
    </footer>
  );
}
