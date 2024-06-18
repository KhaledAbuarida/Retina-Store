export interface IProduct {
  _id: string;
  name: string;
  image: string;
  price: number;
  category?: string;
  stock: number;
}
