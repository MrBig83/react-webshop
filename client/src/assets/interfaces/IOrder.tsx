import ICustomer from "./ICustomer"
export default interface IOrder {
    _id: string;
    orderNumber: number;
    customer: ICustomer;
}