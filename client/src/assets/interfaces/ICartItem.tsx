import IProduct from "./IProduct";
export interface ICartItem {
  product: IProduct;
  item: ICartItem;
  image: string | undefined;
  title: string;
  _id: string;
  quantity: number;
  price: number;

  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}