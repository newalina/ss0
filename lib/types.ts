export type View = "garden" | "grid";

export type ProductImageType =
  | "main"
  | "carousel"
  | "front"
  | "back"
  | "detail";

export interface ProductImage {
  src: string;
  alt: string;
  type: ProductImageType;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  images: ProductImage[];
  price?: number;
  description?: string;
  design?: string[];
  materials?: string[];
  make?: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface LayoutConfig {
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
