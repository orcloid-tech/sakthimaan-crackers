import type { Product } from "./products";

export function getProductImage(categorySlug: string, product?: Product): string {
  const name = product?.name.toLowerCase() ?? "";

  // Check by product name first for specific matches
  if (name.includes("bomb") || name.includes("adiyal") || name.includes("kuruvi") || name.includes("lakshmi")) {
    return "/images/bomb.jpg";
  }
  if (name.includes("chakkar") || name.includes("wheel") || name.includes("spinner") || name.includes("disco")) {
    return "/images/ground-chakkar.jpg";
  }
  if (name.includes("sparkler") || name.includes("muthu") || name.includes("electric")) {
    return "/images/sparklers.jpg";
  }
  if (name.includes("flower pot") || name.includes("fountain") || name.includes("koti") || name.includes("peacock")) {
    return "/images/flowerpot.jpg";
  }
  if (name.includes("rocket") || name.includes("bomb rocket")) {
    return "/images/rockets.jpg";
  }
  if (name.includes("shot") || name.includes("fancy") || name.includes("rider")) {
    return "/images/aerial-shots.jpg";
  }
  if (name.includes("combo") || name.includes("gift box") || name.includes("laptop") || name.includes("chorsa") || name.includes("garland")) {
    return "/images/combo-pack.jpg";
  }
  if (name.includes("candle") || name.includes("twinkling star") || name.includes("tube") || name.includes("gun")) {
    return "/images/candle-tube.jpg";
  }

  // Fallback by category slug
  switch (categorySlug) {
    case "sparklers":
    case "special-sparklers":
      return "/images/sparklers.jpg";
    case "ground-chakkar":
    case "wheel-crackers":
      return "/images/ground-chakkar.jpg";
    case "flower-pots":
    case "tri-colour-fountain":
    case "mini-colour-fountain":
    case "multi-colour-fountain-3":
    case "multi-colour-fountain-4":
    case "fruit-series-fountain":
    case "multi-step-fountain":
    case "peacock-crackers":
    case "musical-fountain":
    case "fantasy-fountain":
      return "/images/flowerpot.jpg";
    case "rocket-items":
      return "/images/rockets.jpg";
    case "bomb-items":
    case "flash-light-sound":
    case "bijli-crackers":
    case "tin-crackers":
      return "/images/bomb.jpg";
    case "aerial-fancy":
    case "multicolour-shots":
      return "/images/aerial-shots.jpg";
    case "combo-packs":
    case "gift-boxes":
    case "match-boxes":
    case "festival-garlands":
      return "/images/combo-pack.jpg";
    case "twinkling-star":
      return "/images/candle-tube.jpg";
    default:
      return "/images/aerial-shots.jpg";
  }
}
