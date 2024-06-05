export interface Product {
  id: number;
  title: string;
  category: string;
}

export interface ProductState {
  products: Product[];
}
