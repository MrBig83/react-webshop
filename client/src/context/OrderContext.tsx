import { useState, useEffect, createContext, PropsWithChildren } from "react";

import IOrder from "../assets/interfaces/IOrder";

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
  loading: boolean;
  orders: IOrder[];
  //setOrders: React.Dispatch<React.SetStateAction<string>>; // ==============================

  orderTotal: number;

  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setShippingMethod: React.Dispatch<React.SetStateAction<string>>;
  setShippingTime: React.Dispatch<React.SetStateAction<string>>;

  setOrderItems: React.Dispatch<React.SetStateAction<string>>;
  setOrderInfo: React.Dispatch<React.SetStateAction<string>>;
  setOrderTotal: React.Dispatch<React.SetStateAction<number>>;
  placeOrder: () => Promise<void>;

  updateOrder: (values: IOrder, id: string) => Promise<void>;
}

export const OrderContext = createContext<OrderContextProps>(null as any);

const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [shippingData, setShippingData] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingTime, setShippingTime] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState(Number);
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderTotal, setOrderTotal] = useState(Number);
  const [loading, setLoading] = useState(false);

  //const [orderItems, setOrderItems] = useState(""); //=======================
  // const [orderNumber, setOrderNumber] = useState(Number);

  //const [orderInfo, setOrderInfo] = useState(""); // =======================
  const [orders, setOrders] = useState([]); // =====================

  //const [orderTotal, setOrderTotal] = useState(Number);

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
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await res.json();

      setOrderNumber(data.orderNumber);
      setLoading(false);
    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  const getOrders = async () => {
    const res = await fetch("/api/orders");
    const orders = await res.json();
    setOrders(orders);
  };
  useEffect(() => {
    getOrders();
  }, []);

  async function updateOrder(values: IOrder, id: string) {
    await fetch(`/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    getOrders();
  }

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
        setShippingMethod,
        setShippingTime,
        setOrderItems,
        setOrderInfo,
        setOrderTotal,
        orderTotal,
        shippingData,
        orderNumber,
        orderInfo,
        loading,
        setOrders,
        getOrders,
        orders,
        updateOrder,
        shippingTime
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
