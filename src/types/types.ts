export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export interface AppState {
  allProducts: {
    products: Product[];
  };
}

export interface ProductState {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}
