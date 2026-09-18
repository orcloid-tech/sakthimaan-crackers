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
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" id="categories">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-night-950">Shop by Category</h2>
        <p className="font-tamil mt-2 text-sm text-night-700/70">வகைவகையான கிராக்கர்ஸ் ஒரே இடத்தில்</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((c) => {
          const Icon = categoryIcon[c.slug] ?? SparkleIcon;
          return (
            <Link
              key={c.slug}
              href={`/products?cat=${c.slug}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-night-800/10 bg-white p-4 text-center card-shadow transition-all hover:-translate-y-0.5 hover:border-flame-500/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-night-800/8 to-flame-500/15 text-night-800 transition-transform group-hover:scale-110 group-hover:text-night-700">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold leading-snug text-night-950">{c.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
