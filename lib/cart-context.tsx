"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { allProducts } from "./products";

export type CartLine = {
  key: string; // `${categorySlug}-${sno}`
  qty: number;
};

type CartContextValue = {
  lines: Record<string, number>;
  count: number;
  setQty: (key: string, qty: number) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sakthimaan-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Record<string, number>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore quota errors
    }
  }, [lines, hydrated]);

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[key];
      } else {
        next[key] = qty;
      }
      return next;
    });
  }, []);

  const increment = useCallback((key: string) => {
    setLines((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }));
  }, []);

  const decrement = useCallback((key: string) => {
    setLines((prev) => {
      const current = prev[key] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: current - 1 };
    });
  }, []);

  const remove = useCallback((key: string) => {
    setLines((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const clear = useCallback(() => setLines({}), []);

  const count = useMemo(
    () => Object.values(lines).reduce((sum, q) => sum + q, 0),
    [lines]
  );

  const value = useMemo(
    () => ({ lines, count, setQty, increment, decrement, remove, clear }),
    [lines, count, setQty, increment, decrement, remove, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function productKey(categorySlug: string, sno: number) {
  return `${categorySlug}-${sno}`;
}

export function useCartItems() {
  const { lines } = useCart();
  return useMemo(() => {
    return Object.entries(lines)
      .map(([key, qty]) => {
        const product = allProducts.find((p) => productKey(p.categorySlug, p.sno) === key);
        if (!product) return null;
        return { key, qty, product };
      })
      .filter((x): x is { key: string; qty: number; product: (typeof allProducts)[number] } => x !== null);
  }, [lines]);
}
