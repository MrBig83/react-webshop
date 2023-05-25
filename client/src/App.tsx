import React from "react";
import { Layout } from "antd";
import Main from "./assets/components/Main/Main";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
