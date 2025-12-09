"use client";

import { getProductById } from "@/lib/products";
import { getProductLayout } from "@/lib/layouts";
import ProductImage from "@/components/ProductImage";
import { useStore } from "@/store/useStore";

const productIds = ["ss01", "ss02", "e1", "n1", "r1", "w1"];

export default function Home() {
  const { view, setView } = useStore();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <button
        onClick={() => setView(view === "garden" ? "grid" : "garden")}
        className="absolute left-8 top-8 z-20 border border-white/40 px-4 py-1 text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white hover:border-white transition-colors"
      >
        {view === "garden" ? "Grid view" : "Garden view"}
      </button>

      {productIds.map((productId) => {
        const product = getProductById(productId);
        const layout = getProductLayout(productId);

        if (!product || !layout) return null;

        return (
          <ProductImage
            key={productId}
            product={product}
            view={view}
            garden={layout.garden}
            grid={layout.grid}
          />
        );
      })}
    </div>
  );
}
