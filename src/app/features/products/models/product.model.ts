export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: category;
  inStock: boolean;
  rating: number;
}

export type category = "gaming" | "clothing" | "home" | "electronics" | "sports";
