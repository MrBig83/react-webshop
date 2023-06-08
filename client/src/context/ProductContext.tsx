
import { useState, useEffect, createContext, PropsWithChildren } from "react";
import IProduct from "../assets/interfaces/IProduct";

//Detta används inte ens av Oscar
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

interface ProductContextProps {
    //Här typar vi alla variabler som används i contexten
    product: IProduct;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: number;
//   street: string;
//   zipcode: string;
//   city: string;
//   country: string;
//   shippingData: any; /// typa
//   orderNumber: number;
//   orderInfo: any; ///typa
//   setEmail: React.Dispatch<React.SetStateAction<string>>;
//   setFirstname: React.Dispatch<React.SetStateAction<string>>;
//   setLastname: React.Dispatch<React.SetStateAction<string>>;
//   setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
//   setStreet: React.Dispatch<React.SetStateAction<string>>;
//   setZipcode: React.Dispatch<React.SetStateAction<string>>;
//   setCity: React.Dispatch<React.SetStateAction<string>>;
//   setCountry: React.Dispatch<React.SetStateAction<string>>;
//   setShippingMethod: React.Dispatch<React.SetStateAction<string>>;
//   setOrderItems: React.Dispatch<React.SetStateAction<string>>;
//   setOrderInfo: React.Dispatch<React.SetStateAction<string>>;
//   placeOrder: () => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps | null>(null);

const ProductContextProvider = ({ children }: PropsWithChildren) => {
    //Här skapas alla states som skall användas. Glöm inte rätt typning i sista parantesen.
//   const [street, setStreet] = useState("");
//   const [orderInfo, setOrderInfo] = useState([]);

  console.log("Logga något kul om man vill... :P");

  //Om man skulle behöva objekt med flera variabler i, så är det perfekt att skapa dessa här. 
//   const deliveryAddress = {
//     street,
//     zipcode,
//     city,
//     country,
//   };

//   const order = {
//     deliveryAddress,
//     shippingMethod,
//     orderItems,
//   };


//Här skapar vi logik och funktioner som skall användas. Exempelvis att anropa databasen via ett API. 
//   const placeOrder = async (): Promise<void> => {
//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(order),
//       });

//       console.log(order);
//       const data = await res.json();

//       console.log(data.orderNumber);
//       setOrderNumber(data.orderNumber);
//     } catch (err) {
//       console.log(err);
//       // Handle errors
//     }
//   };

//   //shippingMethod
//   const getShippingMethod = async () => {
//     const res = await fetch("/api/shippingmethod");
//     const shippingData = await res.json();
//     setShippingData(shippingData);
//   };

//Osäker på vad useEffect gör för nytta här egentligen... Jag vet inte vad den gör över huvud taget... Kanske för att dra igång anropet precis ovan. 
//   useEffect(() => {
//     getShippingMethod();
//   }, []);

  return (
    <ProductContext.Provider
    //Här ANTAR jag att man slänger in alla variabler och funktioner som vi vill komma åt utifrån. 
      value={{
        // street,
        // zipcode,
        // city,
        // country,
        // setZipcode,
        // setStreet,
        // setCountry,
        // setCity,
        // placeOrder,
        // shippingData,
        // setShippingMethod,
        // setOrderItems,
        // orderNumber,
        // setOrderInfo,
        // orderInfo,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
