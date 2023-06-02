import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import NavCarousel from "./assets/components/NavCarousel/NavCarousel";
import MyProductsProvider from "./context/ProductsContext";
import MyCartItemProvider from "./context/CartItemContext";
//import ApiContextProvider from "./context/ApiContext";
const App: React.FC = () => {
  return (
    <MyProductsProvider>
      <MyCartItemProvider>
        <Layout className="layout">
          <Header />
          <NavCarousel />
          <Main />
          <Footer />
        </Layout>
      </MyCartItemProvider>
    </MyProductsProvider>
  );
};

export default App;
