"use client";

import Image from "next/image";
import { getMainImage } from "@/lib/data";
import { Product } from "@/lib/types";

interface ProductImageProps {
  product: Product;
  position: { left: string; top: string };
  imageSize: { width: number; height: number; maxWidth: string };
}

export default function ProductImage({
  product,
  position,
  imageSize,
}: ProductImageProps) {
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
      <Image
        src={image.src}
        alt={image.alt}
        width={imageSize.width}
        height={imageSize.height}
        className="object-contain"
        style={{ maxWidth: imageSize.maxWidth, height: "auto" }}
      />
    </div>
  );
}
