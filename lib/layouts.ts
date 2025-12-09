import type { LayoutConfig } from "./types";

export interface ProductLayout {
  garden: LayoutConfig;
  grid: LayoutConfig;
}

export const productLayouts: Record<string, ProductLayout> = {
  ss01: {
    garden: {
      position: { left: "30%", top: "60%" },
      imageSize: { width: 500, height: 500, maxWidth: "500px" },
      border: {
        left: "49%",
        top: "74%",
        width: "230px",
        height: "230px",
      },
      namePosition: { left: "49%", top: "101%" },
    },
    grid: {
      position: { left: "calc(50% - 590px)", top: "30%" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
    },
  },
  ss02: {
    garden: {
      position: { left: "70%", top: "40%" },
      imageSize: { width: 500, height: 500, maxWidth: "500px" },
      border: {
        left: "49%",
        top: "74%",
        width: "230px",
        height: "230px",
      },
      namePosition: { left: "49%", top: "101%" },
    },
    grid: {
      position: { left: "calc(50% - 290px)", top: "30%" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
    },
  },
  e1: {
    garden: {
      position: { left: "45%", top: "35%" },
      imageSize: { width: 250, height: 250, maxWidth: "250px" },
      border: {
        left: "50%",
        top: "32%",
        width: "180px",
        height: "70px",
      },
      namePosition: { left: "95%", top: "11%" },
      subtitlePosition: "top",
    },
    grid: {
      position: { left: "calc(50% + 10px)", top: "30%" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
      subtitlePosition: "bottom",
    },
  },
  n1: {
    garden: {
      position: { left: "52%", top: "78%" },
      imageSize: { width: 450, height: 450, maxWidth: "400px" },
      border: {
        left: "52%",
        top: "40%",
        width: "160px",
        height: "160px",
      },
      namePosition: { left: "92%", top: "65%" },
    },
    grid: {
      position: { left: "calc(50% + 310px)", top: "30%" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
    },
  },
  r1: {
    garden: {
      position: { left: "20%", top: "30%" },
      imageSize: { width: 400, height: 400, maxWidth: "400px" },
      border: {
        left: "32%",
        top: "75%",
        width: "170px",
        height: "170px",
      },
      namePosition: { left: "32%", top: "101%" },
    },
    grid: {
      position: { left: "calc(50% - 590px)", top: "calc(30% + 300px)" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
    },
  },
  w1: {
    garden: {
      position: { left: "85%", top: "70%" },
      imageSize: { width: 400, height: 400, maxWidth: "400px" },
      border: {
        left: "50%",
        top: "60%",
        width: "180px",
        height: "100px",
      },
      namePosition: { left: "7%", top: "60%" },
    },
    grid: {
      position: { left: "calc(50% - 290px)", top: "calc(30% + 300px)" },
      imageSize: { width: 280, height: 280, maxWidth: "280px" },
      border: {
        left: "0%",
        top: "50%",
        width: "280px",
        height: "280px",
      },
      namePosition: { left: "50%", top: "104%" },
    },
  },
};

export function getProductLayout(productId: string): ProductLayout | undefined {
  return productLayouts[productId];
}
