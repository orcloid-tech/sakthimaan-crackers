import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import FeaturedGrid from "@/components/FeaturedGrid";
import PriceReductions from "@/components/PriceReductions";
import SpecialOffers from "@/components/SpecialOffers";
import CategoryShowcase from "@/components/CategoryShowcase";
import AllEnquiries from "@/components/AllEnquiries";

export default function Home() {
  return (
    <>
      {/* 1. Hero with Fireworks background, Left Brand Card, Right Firework Burst & Delivery Banner */}
      <Hero />

      {/* 2. Trust Badges */}
      <TrustBadges />

      {/* 3. Flagship 16-Card Product Grid (matching reference image main showcase) */}
      <FeaturedGrid />

      {/* 4. Latest Price Reductions (matching reference image section) */}
      <PriceReductions />

      {/* 5. Special Offers - Combos & Gift Boxes (matching reference image section) */}
      <SpecialOffers />

      {/* 6. All 27 Categories Showcase */}
      <CategoryShowcase />

      {/* 7. All Enquiries Section (matching reference image layout with side burst) */}
      <AllEnquiries />
    </>
  );
}
