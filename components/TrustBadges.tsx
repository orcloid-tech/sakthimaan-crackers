import { ShieldIcon, TagIcon, TruckIcon, SparkleIcon } from "./icons";

const badges = [
  {
    icon: TagIcon,
    title: "Up to 90% Off MRP",
    desc: "Direct factory-linked pricing on every category, no middlemen.",
  },
  {
    icon: ShieldIcon,
    title: "Tested & Certified",
    desc: "Quality checked crackers sourced straight from Sivakasi.",
  },
  {
    icon: TruckIcon,
    title: "Wholesale & Retail",
    desc: "Bulk orders for events, and small packs for family celebrations.",
  },
  {
    icon: SparkleIcon,
    title: "180+ Varieties",
    desc: "From sparklers to fancy fountains — everything under one roof.",
  },
];

export default function TrustBadges() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {badges.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-maroon-800/10 bg-white p-4 card-shadow sm:p-5"
          >
            <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-maroon-800/10 text-maroon-800">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-sm font-semibold text-maroon-950">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-maroon-950/60">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
