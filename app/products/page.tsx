import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsBrowser from "@/components/ProductsBrowser";

export const metadata: Metadata = {
  title: "Full Price List | Sakthi Maan Crackers",
  description: "Browse all 180+ crackers varieties from Sakthi Maan Crackers, Sivakasi, at up to 90% off MRP.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#08080a]">
      <div className="border-b border-zinc-800 bg-[#0d0d12] py-10 text-center">
        <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
          Direct Factory Wholesale Rates
        </span>
        <h1 className="font-display mt-2 text-3xl font-extrabold text-gold-gradient sm:text-5xl">
          Full Price List
        </h1>
        <p className="font-tamil mt-2 text-sm text-amber-200/80">
          முழு விலைப் பட்டியல் — 90% வரை தள்ளுபடி · சிவகாசி
        </p>
      </div>
      <Suspense fallback={<div className="py-24 text-center text-sm text-zinc-400">Loading price list…</div>}>
        <ProductsBrowser />
      </Suspense>
    </div>
  );
}
