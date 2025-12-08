"use client";

import Image from "next/image";
import { getProductById, getMainImage } from "@/lib/data";

export default function GardenView() {
  const ss01 = getProductById("ss01");
  const ss02 = getProductById("ss02");
  const e1 = getProductById("e1");
  const n1 = getProductById("n1");
  const r1 = getProductById("r1");
  const w1 = getProductById("w1");

  const ss01Image = ss01 ? getMainImage(ss01) : null;
  const ss02Image = ss02 ? getMainImage(ss02) : null;
  const e1Image = e1 ? getMainImage(e1) : null;
  const n1Image = n1 ? getMainImage(n1) : null;
  const r1Image = r1 ? getMainImage(r1) : null;
  const w1Image = w1 ? getMainImage(w1) : null;

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

      {e1Image && (
        <div
          className="absolute"
          style={{
            left: "45%",
            top: "35%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={e1Image.src}
            alt={e1Image.alt}
            width={250}
            height={250}
            className="object-contain"
            style={{ maxWidth: "250px", height: "auto" }}
          />
        </div>
      )}

      {n1Image && (
        <div
          className="absolute"
          style={{
            left: "52%",
            top: "78%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={n1Image.src}
            alt={n1Image.alt}
            width={450}
            height={450}
            className="object-contain"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </div>
      )}

      {r1Image && (
        <div
          className="absolute"
          style={{
            left: "20%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={r1Image.src}
            alt={r1Image.alt}
            width={400}
            height={400}
            className="object-contain"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </div>
      )}

      {w1Image && (
        <div
          className="absolute"
          style={{
            left: "85%",
            top: "70%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={w1Image.src}
            alt={w1Image.alt}
            width={400}
            height={400}
            className="object-contain"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
