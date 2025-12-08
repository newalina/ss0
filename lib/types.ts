export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  images: ProductImage[];
  design: string[];
  materials: string[];
  make: string[];
}

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export type View = "garden" | "grid";
