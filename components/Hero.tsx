import Link from "next/link";
import { shopInfo } from "@/lib/products";
import { PhoneIcon, SparkleIcon, WhatsAppIcon } from "./icons";
import FireworkBurst from "./FireworkBurst";
import Confetti from "./Confetti";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-night-950 via-night-900 to-night-800 text-cream">
      {/* night-sky glow */}
      <div className="pointer-events-none absolute inset-0 bg-diagonal-shine" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame-500/10 blur-3xl" />

      <FireworkBurst
        id="burst-left"
        className="pointer-events-none absolute -left-6 top-0 h-[280px] w-[300px] sm:h-[360px] sm:w-[380px]"
        colorCore="#ff2fa0"
        colorMid="#c34bff"
        colorTip="#ff7fce"
      />
      <FireworkBurst
        id="burst-right"
        className="pointer-events-none absolute -right-6 top-0 h-[280px] w-[300px] scale-x-[-1] sm:h-[360px] sm:w-[380px]"
        colorCore="#ff7a1f"
        colorMid="#ff4f8a"
        colorTip="#ffb877"
      />

      <Confetti />

      <SparkleIcon className="animate-sparkle pointer-events-none absolute left-[6%] top-[20%] h-5 w-5 text-flame-200/80" />
      <SparkleIcon className="animate-sparkle pointer-events-none absolute right-[9%] top-[14%] h-4 w-4 text-flame-200/70 [animation-delay:0.6s]" />
      <SparkleIcon className="animate-sparkle pointer-events-none absolute left-[16%] top-[58%] h-3.5 w-3.5 text-flame-200/60 [animation-delay:1.1s]" />
      <SparkleIcon className="animate-sparkle pointer-events-none absolute right-[18%] top-[64%] h-6 w-6 text-flame-200/70 [animation-delay:1.6s]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-28">
        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-flame-200 uppercase">
          <SparkleIcon className="h-3.5 w-3.5" /> Direct from Sivakasi · Up to 90% Off MRP
        </span>

        <p className="font-tamil animate-float text-3xl font-bold text-flame-gradient sm:text-4xl">
          {shopInfo.nameTa}
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-cream sm:text-6xl">
          {shopInfo.nameEn}
        </h1>
        <p className="font-tamil mx-auto mt-4 max-w-xl text-lg text-flame-200/80">&ldquo;{shopInfo.tagline}&rdquo;</p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70 sm:text-base">
          Premium quality Deepavali crackers — flower pots, fancy fountains, sparklers, gift boxes &amp; family
          combos. Wholesale &amp; retail, straight from Thayilpatti, Sivakasi.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-br from-flame-300 via-flame-500 to-flame-600 px-7 py-3 text-sm font-bold text-night-950 shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
          >
            View Full Price List
          </Link>
          <a
            href={`https://wa.me/${shopInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-flame-400/50 bg-white/5 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
            Order on WhatsApp
          </a>
        </div>

        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-flame-200/80">
          {shopInfo.phones.slice(0, 3).map((p) => (
            <a key={p} href={`tel:+91${p}`} className="flex items-center gap-1.5 hover:text-flame-300">
              <PhoneIcon className="h-4 w-4" /> {p}
            </a>
          ))}
        </div>
      </div>

      <svg
        viewBox="0 0 1440 60"
        className="relative block w-full text-[var(--background)]"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0 30 Q 360 60 720 30 T 1440 30 V60 H0 Z" />
      </svg>
    </section>
  );
}
