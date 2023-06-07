import { ICartItem } from "./ICartItem";
export interface IOrderItem {
  product: ICartItem;
  quantity: number;
  price: number;
  _id: string;
}

export interface IOrder {
  orderItems: IOrderItem[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  street: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface IOrderContext {
  orders: IOrder[];
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  placeOrder: () => Promise<void>;
  getAllOrders: () => Promise<void>;
  getOrder: (id: string) => Promise<void>;
  addOrder: (order: IOrder) => Promise<void>;
  markAsShipped: (id: string) => Promise<void>;
}
