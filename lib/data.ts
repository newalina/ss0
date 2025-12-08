import { Product } from "./types";

export const products: Product[] = [
  {
    id: "ss01",
    name: "SS01",
    subtitle: "artifact 001 - boot",
    price: 1150,
    description:
      "Minimal, tactile, and enduring, the pieces are designed as wearable relics for the present.",
    design: [
      "Sculptural two part outsole",
      "Asymmetrical toe design",
      "Black color",
    ],
    materials: [
      "Leather & neoprene upper",
      "TPU platform midsole",
      "Rubber treaded outsole",
      "Metal hardware",
      "YKK zipper",
    ],
    make: [
      "Designed in New York City",
      "Made in experimental lab in China",
      "Finalized in London",
    ],
    images: [
      {
        src: "/images/ss01.png",
        alt: "SS01 hero",
        type: "main",
      },
      {
        src: "/images/ss01-carousel.png",
        alt: "SS01 carousel",
        type: "carousel",
      },
      {
        src: "/images/ss01-front.png",
        alt: "SS01 front",
        type: "front",
      },
      {
        src: "/images/ss01-back.png",
        alt: "SS01 back",
        type: "back",
      },
      {
        src: "/images/ss01-detail-1.jpeg",
        alt: "SS01 detail 1",
        type: "detail",
      },
      {
        src: "/images/ss01-detail-2.jpeg",
        alt: "SS01 detail 2",
        type: "detail",
      },
      {
        src: "/images/ss01-detail-3.jpeg",
        alt: "SS01 detail 3",
        type: "detail",
      },
    ],
  },
  {
    id: "ss02",
    name: "SS02",
    subtitle: "artifact 002 - boot",
    price: 1350,
    description:
      "Minimal, tactile, and enduring, the pieces are designed as wearable relics for the present.",
    design: [
      "Sculptural two part outsole",
      "Asymmetrical toe design",
      "Black color",
    ],
    materials: [
      "Leather & neoprene upper",
      "TPU platform midsole",
      "Rubber treaded outsole",
      "Metal hardware",
      "YKK zipper",
    ],
    make: [
      "Designed in New York City",
      "Made in experimental lab in China",
      "Finalized in London",
    ],
    images: [
      {
        src: "/images/ss02.png",
        alt: "SS02 hero",
        type: "main",
      },
    ],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getMainImage(product: Product) {
  return product.images.find((img) => img.type === "main");
}

export function getCarouselImages(product: Product) {
  const main = getMainImage(product);
  const additional = product.images.filter((img) => img.type === "carousel");
  return [main, ...additional];
}

export function getFrontBackImages(product: Product) {
  const front = product.images.find((img) => img.type === "front");
  const back = product.images.find((img) => img.type === "back");
  return { front, back };
}

export function getDetailImages(product: Product) {
  return product.images.filter((img) => img.type === "detail");
}
