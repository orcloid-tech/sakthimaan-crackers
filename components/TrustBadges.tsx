import { ShieldIcon, TagIcon, TruckIcon, SparkleIcon } from "./icons";

const badges = [
  {
    icon: TagIcon,
    title: "Up to 90% Off MRP",
    titleTa: "90% வரை தள்ளுபடி",
    desc: "Direct factory-linked wholesale pricing on every single cracker category.",
  },
  {
    icon: ShieldIcon,
    title: "Tested & Certified",
    titleTa: "100% தரமான வெடிகள்",
    desc: "Strictly quality-checked authentic crackers sourced directly from Sivakasi.",
  },
  {
    icon: TruckIcon,
    title: "Wholesale & Retail",
    titleTa: "மொத்த & சில்லறை",
    desc: "Bulk event packages, temple festivals & family celebration combo packs.",
  },
  {
    icon: SparkleIcon,
    title: "180+ Varieties",
    titleTa: "180+ ரகங்கள்",
    desc: "From sparklers to 240-shot multi-color sky fireworks under one roof.",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map(({ icon: Icon, title, titleTa, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-zinc-800/80 bg-[#121217]/80 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(250,204,21,0.12)]"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-tamil text-[11px] text-amber-300/80">
                {titleTa}
              </span>
            </div>
            <p className="text-sm font-bold tracking-wide text-zinc-100 uppercase transition-colors group-hover:text-amber-300">
              {title}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
