"use client";

import Image from "next/image";
import { getProductById, getMainImage } from "@/lib/data";

export default function GardenView() {
  const ss01 = getProductById("ss01");
  const ss02 = getProductById("ss02");

  const ss01Image = ss01 ? getMainImage(ss01) : null;
  const ss02Image = ss02 ? getMainImage(ss02) : null;

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {ss01Image && (
        <div
          className="absolute"
          style={{
            left: "30%",
            top: "60%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={ss01Image.src}
            alt={ss01Image.alt}
            width={500}
            height={500}
            className="object-contain"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
      )}

      {ss02Image && (
        <div
          className="absolute"
          style={{
            left: "70%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={ss02Image.src}
            alt={ss02Image.alt}
            width={500}
            height={500}
            className="object-contain"
            style={{ maxWidth: "500px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
