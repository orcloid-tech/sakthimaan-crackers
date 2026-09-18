import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsBrowser from "@/components/ProductsBrowser";

export const metadata: Metadata = {
  title: "Full Price List | Sakthi Maan Crackers",
  description: "Browse all 180+ crackers varieties from Sakthi Maan Crackers, Sivakasi, at up to 90% off MRP.",
};

export default function ProductsPage() {
  return (
    <div>
      <div className="bg-night-950 py-8 text-center text-cream">
        <h1 className="font-display text-3xl font-bold text-flame-gradient sm:text-4xl">Full Price List</h1>
        <p className="font-tamil mt-2 text-sm text-flame-200/80">முழு விலைப் பட்டியல் — 90% தள்ளுபடி</p>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-sm text-night-950/50">Loading price list…</div>}>
        <ProductsBrowser />
      </Suspense>
    </div>
  );
}
