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
  textPosition: {
    subtitleInside?: boolean;
    nameBelow?: boolean;
  };
}

export default function ProductImage({
  product,
  position,
  imageSize,
  border,
  textPosition,
}: ProductImageProps) {
  const [isHovered, setIsHovered] = useState(false);
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
            {/* Invisible hoverable area - border box area only */}
            <div
              className="cursor-pointer"
              style={{
                width: border.width,
                height: border.height,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Blue border box */}
              <div
                className={`absolute inset-0 border-2 border-[#1E00FF] ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {textPosition?.subtitleInside && product.subtitle && (
                  <div className="absolute bottom-1 left-0 right-0 px-2 bg-transparent">
                    <p className="text-[#1E00FF] text-xs leading-tight">
                      {product.subtitle}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Product name below the box */}
            {textPosition?.nameBelow && product.name && (
              <div
                className={`absolute text-[#1E00FF] ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: "50%",
                  top: `calc(${border.height} / 2 + 12px)`,
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                }}
              >
                <p className="text-lg font-medium whitespace-nowrap">
                  {product.name}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
