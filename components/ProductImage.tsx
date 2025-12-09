"use client";

import { useState } from "react";
import Image from "next/image";
import { getMainImage } from "@/lib/products";
import { Product, View, LayoutConfig } from "@/lib/types";
import { motion } from "framer-motion";

interface ProductImageProps {
  product: Product;
  view: View;
  garden: LayoutConfig;
  grid: LayoutConfig;
}

export default function ProductImage({
  product,
  view,
  garden,
  grid,
}: ProductImageProps) {
  const [isHovering, setIsHovering] = useState(false);

  const image = getMainImage(product);

  if (!image) return null;

  const current = view === "garden" ? garden : grid;
  const {
    position,
    imageSize,
    border,
    namePosition,
    subtitlePosition = "bottom",
  } = current;

  return (
    <motion.div
      className="absolute"
      initial={false}
      animate={{
        left: position.left,
        top: position.top,
      }}
      style={{
        transform:
          view === "grid" ? "translateY(-50%)" : "translate(-50%, -50%)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <motion.div
        className="relative"
        initial={false}
        animate={{
          width: imageSize.width,
          height: imageSize.height,
          maxWidth: imageSize.maxWidth,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ overflow: "hidden" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={imageSize.width}
          height={imageSize.height}
          className={view === "grid" ? "object-cover" : "object-contain"}
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        {border && (
          <motion.div
            className="absolute"
            style={{
              left: border.left,
              top: border.top,
              transform:
                view === "grid" ? "translateY(-50%)" : "translate(-50%, -50%)",
              width: border.width,
              height: border.height,
            }}
          >
            <div
              className="relative h-full w-full cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {view === "grid" && (
                <motion.div
                  className="absolute inset-0 border-2 border-white"
                  animate={{ opacity: isHovering ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                />
              )}
              <motion.div
                className="absolute inset-0 border-2 border-[#1E00FF]"
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {product.subtitle && (
                  <div
                    className={`absolute left-0 right-0 px-2 bg-transparent ${
                      subtitlePosition === "top" ? "top-1" : "bottom-1"
                    }`}
                  >
                    <p className="text-[#1E00FF] text-xs text-right">
                      {product.subtitle}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {namePosition && product.name && (
          <motion.div
            className="absolute text-[#1E00FF]"
            style={{
              left: namePosition.left,
              top: namePosition.top,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-2xl font-medium italic whitespace-nowrap">
              {product.name}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
