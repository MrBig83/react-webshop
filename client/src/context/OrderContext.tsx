import { ICartItem } from "../assets/interfaces/ICartItem";
import { useState, useEffect, createContext, PropsWithChildren } from "react";

// interface IOrderData {
//   orderItems: ICartItem[];
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: number;
//   street: string;
//   zipcode: string;
//   city: string;
//   country: string;
// }

interface OrderContextProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  street: string;
  zipcode: string;
  city: string;
  country: string;
  shippingData: any; /// typa
  orderNumber: number;
  orderInfo: any; ///typa
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setShippingMethod: React.Dispatch<React.SetStateAction<string>>;
  setOrderItems: React.Dispatch<React.SetStateAction<string>>;
  setOrderInfo: React.Dispatch<React.SetStateAction<string>>;
  placeOrder: () => Promise<void>;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [shippingData, setShippingData] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(Number);
  const [orderInfo, setOrderInfo] = useState([]);

  console.log(orderInfo);

  const deliveryAddress = {
    street,
    zipcode,
    city,
    country,
  };

  const order = {
    deliveryAddress,
    shippingMethod,
    orderItems,
  };

  const placeOrder = async (): Promise<void> => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      console.log(order);
      const data = await res.json();

      console.log(data.orderNumber);
      setOrderNumber(data.orderNumber);
    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  //shippingMethod
  const getShippingMethod = async () => {
    const res = await fetch("/api/shippingmethod");
    const shippingData = await res.json();
    setShippingData(shippingData);
  };

  useEffect(() => {
    getShippingMethod();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        street,
        zipcode,
        city,
        country,
        setZipcode,
        setStreet,
        setCountry,
        setCity,
        placeOrder,
        shippingData,
        setShippingMethod,
        setOrderItems,
        orderNumber,
        setOrderInfo,
        orderInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
