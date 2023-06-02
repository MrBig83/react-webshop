import IProduct from "./iproduct";

export interface ICartItem {
  product: IProduct;
  quantity: number;
  totalPrice: number; //product.price * quantity
}

// export interface ICartItem {
//   product: IProduct;
//   quantity: (productId: string, quantity: number) => void;
//   totalPrice: number;
// }
