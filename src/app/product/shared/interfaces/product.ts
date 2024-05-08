
export interface Product {
  name: string;
  calories: number;
  image: string;
  quantity: number;
}

export interface EmptyProduct {
  
}

export type FormStatus = 'visible' | 'hidden';