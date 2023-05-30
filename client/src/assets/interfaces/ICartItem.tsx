import IProduct from "./Interfaces";

export interface ICartItem {
    product: IProduct;
    quantity: number; 
    totalPrice: number; //totalPrice = produktpriset x kvantitet.
}