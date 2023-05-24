import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import { Route, Routes } from "react-router";
import SingleProduct from "./assets/components/SingleProduct/SingleProduct";

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Layout>
  );
};

export default App;
