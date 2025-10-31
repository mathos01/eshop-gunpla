export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
  inStock: boolean;
  rating: number;
}
export type CreateProduct = {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
  inStock: boolean;
  rating: number;
}
export type category = "gaming" | "clothing" | "home" | "electronics" | "sports";
