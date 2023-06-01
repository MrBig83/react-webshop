export default interface IProduct {
  _id: string;
  categories: [];
  description: string;
  image: string;
  inStock: number;
  price: number;
  title: string;
  quantity: number;
}

export interface ICartItem {
  product: IProduct;

  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}
