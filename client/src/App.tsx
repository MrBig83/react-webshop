import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import NavCarousel from "./assets/components/NavCarousel/NavCarousel";
import MyProductsProvider from "./context/productscontext";

import UserContextProvider from "./context/UserContext";
const App: React.FC = () => {
  return (
    <UserContextProvider>
     <MyProductsProvider> 
      <Layout className="layout">
        <Header />
        <NavCarousel />
        <Main />
        <Footer />
      </Layout>
     </MyProductsProvider>
     </UserContextProvider>
  );
};

export default App;
