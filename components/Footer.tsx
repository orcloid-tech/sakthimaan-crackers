import Link from "next/link";
import Image from "next/image";
import { shopInfo, categories } from "@/lib/products";
import { MapPinIcon, PhoneIcon, SparkleIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-amber-500/20 bg-[#060608] text-zinc-300">
      {/* Subtle Golden Fireworks Glow in Footer */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Top Centered Brand Area matching reference image */}
        <div className="mb-14 text-center">
          <Link href="/" className="inline-flex flex-col items-center gap-2 group">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 shadow-[0_0_25px_rgba(250,204,21,0.3)] transition-transform group-hover:scale-110">
              <SparkleIcon className="h-8 w-8 text-amber-300 animate-sparkle" />
            </div>
            <span className="font-display text-3xl font-extrabold tracking-tight text-gold-gradient sm:text-4xl animate-gold-glow">
              Sakthi Maan Crackers
            </span>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-300 uppercase">
              <span>Fireworks &amp; Pyrotechnics</span>
              <span>•</span>
              <span className="font-tamil">சிவகாசி</span>
            </div>
            <p className="font-tamil mt-1 text-sm text-amber-200/80">
              &ldquo;{shopInfo.tagline}&rdquo;
            </p>
          </Link>
        </div>

        {/* 4 Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: About */}
          <div>
            <p className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Direct from Sivakasi
            </p>
            <p className="mt-4 text-xs leading-relaxed text-zinc-400">
              Sakthi Maan Crackers is your direct factory destination for certified, safe, and vibrant Deepavali
              crackers. Wholesale supply for retail stores, event celebrations, and family packs at up to 90%
              off MRP.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-amber-300/80">
              <span>📍 Thayilpatti, Sivakasi, Tamil Nadu</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <p className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Popular Categories
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products?cat=${c.slug}`}
                    className="text-zinc-400 transition-colors hover:text-amber-300"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="font-bold text-amber-400 transition-colors hover:text-amber-300"
                >
                  View all 27 categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <p className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/products" className="text-zinc-400 transition-colors hover:text-amber-300">
                  Full Price List
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-zinc-400 transition-colors hover:text-amber-300">
                  My Enquiry Cart
                </Link>
              </li>
              <li>
                <Link href="/products?cat=combo-packs" className="text-zinc-400 transition-colors hover:text-amber-300">
                  Family Combo Packs
                </Link>
              </li>
              <li>
                <Link href="/products?cat=gift-boxes" className="text-zinc-400 transition-colors hover:text-amber-300">
                  Festival Gift Boxes
                </Link>
              </li>
              <li>
                <Link href="/#reductions" className="text-zinc-400 transition-colors hover:text-amber-300">
                  Price Reductions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone numbers */}
          <div>
            <p className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Store &amp; Orders
            </p>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li className="flex items-start gap-2 text-zinc-300">
                <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>{shopInfo.address}</span>
              </li>
              {shopInfo.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:+91${p}`}
                    className="flex items-center gap-2 text-zinc-300 transition-colors hover:text-amber-300"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                    <span>{p}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={`https://wa.me/${shopInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-300 transition-colors hover:bg-emerald-500 hover:text-black"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom fireworks image graphic like reference */}
        <div className="mt-14 flex justify-center">
          <div className="relative h-20 w-48 sm:h-24 sm:w-64 opacity-70">
            <Image
              src="/images/golden-burst.jpg"
              alt="Sparklers burst decoration"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-800/80 pt-6 text-[11px] text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Sakthi Maan Crackers, Thayilpatti, Sivakasi. All rights reserved.</p>
          <p className="text-center sm:text-right">
            As per Hon&apos;ble Supreme Court guidelines, buy &amp; burst green crackers during designated hours.
          </p>
        </div>
      </div>
    </footer>
  );
}
