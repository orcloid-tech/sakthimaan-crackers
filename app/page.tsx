import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CategoryShowcase from "@/components/CategoryShowcase";
import ComboHighlight from "@/components/ComboHighlight";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { shopInfo } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <CategoryShowcase />
      <ComboHighlight />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 px-6 py-12 text-center text-cream sm:px-12">
          <p className="font-tamil text-2xl font-bold text-gold-gradient sm:text-3xl">
            இந்த வருட தீபாவளியை உங்கள் சக்திமான் கிராக்கர்ஸுடன் கொண்டாடி மகிழுங்கள்
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-cream/70 sm:text-base">
            Tell us the items you like from our price list and send your enquiry directly on WhatsApp — we&apos;ll
            confirm availability, quantity &amp; delivery for your Deepavali order.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-7 py-3 text-sm font-bold text-maroon-950 shadow-lg transition-transform hover:scale-[1.03]"
            >
              Browse Price List
            </Link>
            <a
              href={`https://wa.me/${shopInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/5 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-maroon-800/10 bg-white p-6 card-shadow sm:grid-cols-3 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-800/10 text-maroon-800">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-maroon-950">Visit Our Store</p>
              <p className="mt-1 text-sm text-maroon-950/60">{shopInfo.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-800/10 text-maroon-800">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-maroon-950">Call for Bulk Orders</p>
              <div className="mt-1 flex flex-col gap-0.5 text-sm text-maroon-950/60">
                {shopInfo.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="hover:text-maroon-700">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-800/10 text-maroon-800">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-maroon-950">Order Anytime</p>
              <p className="mt-1 text-sm text-maroon-950/60">
                Send your list on WhatsApp and we&apos;ll respond with confirmed pricing &amp; delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
