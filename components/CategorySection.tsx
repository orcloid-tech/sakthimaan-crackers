import type { Category } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="scroll-mt-28">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800 pb-3">
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-zinc-100">
          {category.title}
        </h2>
        <span className="font-tamil text-xs sm:text-sm text-amber-300/80">
          {category.titleTa}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {category.items.map((item) => (
          <ProductCard
            key={item.sno}
            product={item}
            categorySlug={category.slug}
            netRate={category.netRate}
          />
        ))}
      </div>
    </section>
  );
}
