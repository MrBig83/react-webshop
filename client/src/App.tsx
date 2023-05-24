import { Layout } from 'antd';

import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from './assets/components/Footer/Footer';

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
