import Link from "next/link";
import type { ComponentType } from "react";
import { categories } from "@/lib/products";
import {
  AerialShellIcon,
  BalloonIcon,
  BombIcon,
  BurstIcon,
  ChakraIcon,
  FlowerPotIcon,
  FountainIcon,
  FountainStepIcon,
  FruitIcon,
  GarlandIcon,
  GiftIcon,
  LightningIcon,
  MaskIcon,
  MatchIcon,
  MusicNoteIcon,
  PackageIcon,
  PeacockIcon,
  PinwheelIcon,
  RocketIcon,
  ShotsIcon,
  SparkleIcon,
  SparklerIcon,
  TinIcon,
} from "./icons";

const categoryIcon: Record<string, ComponentType<{ className?: string }>> = {
  "flash-light-sound": BurstIcon,
  "bomb-items": BombIcon,
  "bijli-crackers": LightningIcon,
  "flower-pots": FlowerPotIcon,
  "tri-colour-fountain": FountainIcon,
  "ground-chakkar": ChakraIcon,
  "wheel-crackers": PinwheelIcon,
  "twinkling-star": SparkleIcon,
  "kids-special": BalloonIcon,
  "rocket-items": RocketIcon,
  "mini-colour-fountain": FountainIcon,
  "multi-colour-fountain-3": FountainIcon,
  "multi-colour-fountain-4": FountainIcon,
  "fruit-series-fountain": FruitIcon,
  "multi-step-fountain": FountainStepIcon,
  "peacock-crackers": PeacockIcon,
  "tin-crackers": TinIcon,
  "musical-fountain": MusicNoteIcon,
  "fantasy-fountain": MaskIcon,
  "aerial-fancy": AerialShellIcon,
  "multicolour-shots": ShotsIcon,
  "match-boxes": MatchIcon,
  "special-sparklers": SparklerIcon,
  sparklers: SparklerIcon,
  "gift-boxes": GiftIcon,
  "combo-packs": PackageIcon,
  "festival-garlands": GarlandIcon,
};

export default function CategoryShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6" id="categories">
      <div className="mb-10 text-center">
        <h2 className="text-xs font-black tracking-widest text-gold-gradient uppercase sm:text-sm">
          Browse by Category
        </h2>
        <p className="font-display mt-2 text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
          Complete Crackers Range
        </p>
        <p className="font-tamil mt-1 text-sm text-amber-200/80">
          வகைவகையான கிராக்கர்ஸ் ஒரே இடத்தில் — 27 பிரிவுகள்
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
        {categories.map((c) => {
          const Icon = categoryIcon[c.slug] ?? SparkleIcon;
          return (
            <Link
              key={c.slug}
              href={`/products?cat=${c.slug}`}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-zinc-800/80 bg-[#121217]/90 p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#181822] hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-amber-400/20 group-hover:shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-bold leading-tight tracking-wide text-zinc-200 transition-colors group-hover:text-amber-300">
                {c.title}
              </span>
              <span className="font-tamil text-[10px] text-zinc-400 line-clamp-1">
                {c.titleTa}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
