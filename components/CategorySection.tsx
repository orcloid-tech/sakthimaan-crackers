import type { Category } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-maroon-800/10 pb-3">
        <h2 className="font-display text-2xl font-bold text-maroon-900">{category.title}</h2>
        <span className="font-tamil text-sm text-maroon-700/70">{category.titleTa}</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
