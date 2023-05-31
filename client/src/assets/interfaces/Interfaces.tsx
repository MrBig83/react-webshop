
export interface IProduct {
    _id: string; 
    categories: [];
    description: string;
    image: string;
    inStock: number;
    price: number;
    title: string;    
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
    totalPrice: number;
}