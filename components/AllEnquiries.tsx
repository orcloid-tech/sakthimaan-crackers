import Image from "next/image";
import { shopInfo } from "@/lib/products";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function AllEnquiries() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6" id="enquiries">
      <div className="grid items-center gap-10 rounded-3xl border border-zinc-800/80 bg-[#121217]/90 p-6 shadow-2xl backdrop-blur-md sm:p-10 lg:grid-cols-12">
        {/* Left Column: Reference Dark Card with Text */}
        <div className="lg:col-span-7">
          <div className="max-w-xl">
            <span className="text-xs font-black tracking-widest text-gold-gradient uppercase sm:text-sm">
              Customer Support &amp; Bookings
            </span>
            <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
              All Enquiries
            </h2>
            <p className="font-tamil mt-1 text-sm text-amber-200/80">
              மொத்த மற்றும் சில்லறை ஆர்டர்களுக்கு தொடர்பு கொள்ளவும்
            </p>
            <p className="mt-4 text-xs leading-relaxed text-zinc-300 sm:text-sm">
              Planning for Deepavali, wedding celebrations, temple festivals, or bulk corporate gifting? We
              provide direct wholesale supply straight from our Sivakasi manufacturing hub with prompt transport
              delivery across Tamil Nadu and all of India.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="h-4 w-4 shrink-0 text-amber-400" />
                <span>{shopInfo.address}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>Call Us:</span>
                </div>
                {shopInfo.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="font-semibold text-zinc-200 transition-colors hover:text-amber-300"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${shopInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-emerald-500/80 bg-emerald-500/10 px-7 py-2.5 text-xs font-extrabold tracking-wider text-emerald-300 uppercase transition-all hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+91${shopInfo.phones[0]}`}
                className="rounded-full border border-zinc-600 bg-transparent px-6 py-2.5 text-xs font-bold tracking-wider text-zinc-300 uppercase transition-all hover:border-amber-400 hover:text-amber-300"
              >
                Call Store
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Reference Fireworks Burst */}
        <div className="flex justify-center lg:col-span-5">
          <div className="relative h-60 w-60 sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-2xl animate-pulse" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-amber-400/30 p-2 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
              <Image
                src="/images/golden-burst.jpg"
                alt="Golden fireworks sparkler burst"
                fill
                sizes="(max-width: 768px) 240px, 288px"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
