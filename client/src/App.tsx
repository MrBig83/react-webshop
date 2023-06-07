import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import NavCarousel from "./assets/components/NavCarousel/NavCarousel";

import CartProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import OrderContextProvider from "./context/OrderContext";
const App: React.FC = () => {
  return (
    <OrderContextProvider>
      <UserContextProvider>
        <CartProvider>
          <Layout className="layout">
            <Header />
            <NavCarousel />
            <Main />
            <Footer />
          </Layout>
        </CartProvider>
      </UserContextProvider>
    </OrderContextProvider>
  );
};

export default App;
