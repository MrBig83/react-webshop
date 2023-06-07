import { ICartItem } from "../assets/interfaces/ICartItem";
import { useState, useEffect, createContext, PropsWithChildren } from "react";

interface IOrderData {
  orderItems: ICartItem[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  street: string;
  zipcode: string;
  city: string;
  country: string;
}

interface OrderContextProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  street: string;
  zipcode: string;
  city: string;
  country: string;
  shippingData: any;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  placeOrder: () => Promise<void>;
  //   data: IOrderData;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

const OrderContextProvider = ({ children }: PropsWithChildren) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(Number);
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [shippingData, setShippingData] = useState([]);

  const order = {
    firstName,
    lastName,
    email,
    phoneNumber,
    street,
    zipcode,
    city,
    country,
    shippingData,
    // Items,
  };

  const placeOrder = async (): Promise<void> => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),

        // firstName: firstName,
        // lastName: lastName,
        // email: email,j
        //),
      });

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
      // Handle errors
    }
  };

  //shippingMethod
  const shippingMethod = async () => {
    const res = await fetch("/api/shippingmethod");
    const shippingData = await res.json();
    setShippingData(shippingData);
  };

  useEffect(() => {
    shippingMethod();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        zipcode,
        city,
        country,
        setFirstname,
        setLastname,
        setEmail,
        setPhoneNumber,
        setZipcode,
        setStreet,
        setCountry,
        setCity,
        placeOrder,
        shippingData,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
