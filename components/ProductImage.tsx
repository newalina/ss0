"use client";

import { useState } from "react";
import Image from "next/image";
import { getMainImage } from "@/lib/data";
import { Product } from "@/lib/types";

interface ProductImageProps {
  product: Product;
  position: { left: string; top: string };
  imageSize: { width: number; height: number; maxWidth: string };
  border: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  namePosition?: { left: string; top: string };
  subtitlePosition?: "top" | "bottom";
}

export default function ProductImage({
  product,
  position,
  imageSize,
  border,
  namePosition,
  subtitlePosition = "bottom",
}: ProductImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const image = getMainImage(product);

  if (!image) return null;

  return (
    <div
      className="absolute"
      style={{
        left: position.left,
        top: position.top,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={imageSize.width}
          height={imageSize.height}
          className="object-contain"
          style={{ maxWidth: imageSize.maxWidth, height: "auto" }}
        />

        {border && (
          <div
            className="absolute"
            style={{
              left: border.left,
              top: border.top,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="cursor-pointer"
              style={{
                width: border.width,
                height: border.height,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                className={`absolute inset-0 border-2 border-[#1E00FF] ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
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
              </div>
            </div>
          </div>
        )}

        {namePosition && product.name && (
          <div
            className={`absolute text-[#1E00FF] ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: namePosition.left,
              top: namePosition.top,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <p className="text-2xl font-medium italic whitespace-nowrap">
              {product.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
