import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import NavCarousel from "./assets/components/NavCarousel/NavCarousel";

import CartProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import OrderContextProvider from "./context/OrderContext";
import ProductContextProvider from "./context/ProductContext";
const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <ProductContextProvider>
      <OrderContextProvider>
        <UserContextProvider>
          <CartProvider>
            <Layout className="layout">
              <Header />
              {isHomePage && <NavCarousel />}
              <Main />
              <Footer />
            </Layout>
          </CartProvider>
        </UserContextProvider>
      </OrderContextProvider>
    </ProductContextProvider>
  );
};

export default App;
