"use client";

import { getProductById } from "@/lib/data";
import ProductImage from "./ProductImage";

export default function GardenView() {
  const ss01 = getProductById("ss01");
  const ss02 = getProductById("ss02");
  const e1 = getProductById("e1");
  const n1 = getProductById("n1");
  const r1 = getProductById("r1");
  const w1 = getProductById("w1");

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {ss01 && (
        <ProductImage
          product={ss01}
          position={{ left: "30%", top: "60%" }}
          imageSize={{ width: 500, height: 500, maxWidth: "500px" }}
          border={{
            left: "49%",
            top: "74%",
            width: "230px",
            height: "230px",
          }}
          namePosition={{ left: "49%", top: "90%" }}
        />
      )}

      {ss02 && (
        <ProductImage
          product={ss02}
          position={{ left: "70%", top: "40%" }}
          imageSize={{ width: 500, height: 500, maxWidth: "500px" }}
          border={{
            left: "49%",
            top: "74%",
            width: "230px",
            height: "230px",
          }}
          namePosition={{ left: "49%", top: "90%" }}
        />
      )}

      {e1 && (
        <ProductImage
          product={e1}
          position={{ left: "45%", top: "35%" }}
          imageSize={{ width: 250, height: 250, maxWidth: "250px" }}
          border={{
            left: "50%",
            top: "32%",
            width: "180px",
            height: "70px",
          }}
          namePosition={{ left: "50%", top: "50%" }}
          subtitlePosition="top"
        />
      )}

      {n1 && (
        <ProductImage
          product={n1}
          position={{ left: "52%", top: "78%" }}
          imageSize={{ width: 450, height: 450, maxWidth: "400px" }}
          border={{
            left: "52%",
            top: "40%",
            width: "160px",
            height: "160px",
          }}
          namePosition={{ left: "52%", top: "55%" }}
        />
      )}

      {r1 && (
        <ProductImage
          product={r1}
          position={{ left: "20%", top: "30%" }}
          imageSize={{ width: 400, height: 400, maxWidth: "400px" }}
          border={{
            left: "32%",
            top: "75%",
            width: "170px",
            height: "170px",
          }}
          namePosition={{ left: "32%", top: "20%" }}
        />
      )}

      {w1 && (
        <ProductImage
          product={w1}
          position={{ left: "85%", top: "70%" }}
          imageSize={{ width: 400, height: 400, maxWidth: "400px" }}
          border={{
            left: "50%",
            top: "60%",
            width: "180px",
            height: "100px",
          }}
          namePosition={{ left: "50%", top: "75%" }}
        />
      )}
    </div>
  );
}
