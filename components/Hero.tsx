import Link from "next/link";
import Image from "next/image";
import { shopInfo } from "@/lib/products";
import { PhoneIcon, SparkleIcon, WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08080a] text-zinc-100">
      {/* Hero Fireworks Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fireworks.jpg"
          alt="Golden fireworks night celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/80 via-[#08080a]/60 to-[#08080a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-20">
        {/* Top Sivakasi Badge */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#16161c]/80 px-4 py-1.5 text-xs font-bold tracking-widest text-amber-300 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(250,204,21,0.15)]">
            <SparkleIcon className="h-3.5 w-3.5 text-amber-400 animate-sparkle" />
            Direct from Sivakasi · Up to 90% Off MRP
          </span>
        </div>

        {/* Hero Top Grid: Left Rounded Card & Right Fireworks Burst */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Reference Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-700/60 bg-[#141419]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,197,24,0.12)]">
              <span className="font-tamil text-sm font-semibold tracking-wide text-amber-300/90 sm:text-base">
                {shopInfo.nameTa}
              </span>
              <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-gold-gradient sm:text-5xl lg:text-6xl animate-gold-glow">
                Sakthi Maan Crackers
              </h1>
              <p className="font-tamil mt-3 text-base font-medium text-amber-200/80 sm:text-lg">
                &ldquo;{shopInfo.tagline}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Welcome to Sivakasi&apos;s trusted fireworks emporium. Premium quality Deepavali crackers —
                flower pots, sparkling ground chakkars, fancy fountains, 120-shot aerial cakes, gift boxes &amp;
                family combo packs. Direct factory wholesale &amp; retail from Thayilpatti, Sivakasi.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/products"
                  className="rounded-full border border-amber-400/80 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-7 py-3 text-xs font-extrabold tracking-wider text-black uppercase shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all hover:scale-105 active:scale-95"
                >
                  View Full Price List
                </Link>
                <a
                  href={`https://wa.me/${shopInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-600/80 bg-[#1e1e26] px-6 py-3 text-xs font-semibold tracking-wider text-zinc-200 uppercase transition-all hover:border-amber-400/60 hover:text-amber-300 hover:bg-[#252530]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Order
                </a>
              </div>

              {/* Direct Phones */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-800/80 pt-5 text-xs text-zinc-400">
                <span className="font-medium text-amber-300/80">Call for Bulk Orders:</span>
                {shopInfo.phones.slice(0, 3).map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="flex items-center gap-1 font-semibold text-zinc-300 hover:text-amber-300"
                  >
                    <PhoneIcon className="h-3 w-3 text-amber-400" /> {p}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Reference Fireworks Burst Showcase */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-amber-400/30 p-2 shadow-[0_0_40px_rgba(250,204,21,0.25)]">
                <Image
                  src="/images/golden-burst.jpg"
                  alt="Sparkling Golden Fireworks Bursts"
                  fill
                  sizes="(max-width: 768px) 256px, 384px"
                  className="rounded-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating micro sparkler badges */}
              <div className="absolute -bottom-2 -left-2 rounded-full border border-amber-400/40 bg-[#121218]/90 px-3.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md shadow-lg animate-float">
                ✨ 180+ Sivakasi Varieties
              </div>
              <div className="absolute -top-2 -right-2 rounded-full border border-amber-400/40 bg-[#121218]/90 px-3.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md shadow-lg animate-float [animation-delay:1.5s]">
                🎆 100% Tested Quality
              </div>
            </div>
          </div>
        </div>

        {/* Reference Banner 2: "LOCAL DELIVERY" / ALL-TAMIL NADU DISPATCH */}
        <div className="mt-14">
          <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-700/60 bg-[#141419]/85 px-6 py-8 text-center shadow-xl backdrop-blur-md transition-all hover:border-amber-400/40 sm:px-12 sm:py-10">
            <h2 className="text-sm font-extrabold tracking-widest text-gold-gradient uppercase sm:text-base">
              Local &amp; All-India Delivery
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Tell us the items you like from our price list and send your enquiry directly on WhatsApp — we&apos;ll
              confirm availability, wholesale discount &amp; reliable delivery for your Deepavali order.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={`https://wa.me/${shopInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-500/80 bg-transparent px-7 py-2 text-xs font-bold tracking-widest text-zinc-200 uppercase transition-all hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.25)]"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
