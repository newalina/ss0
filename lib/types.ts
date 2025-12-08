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
  price: number;
  description: string;
  design: string[];
  materials: string[];
  make: string[];
  images: ProductImage[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}
