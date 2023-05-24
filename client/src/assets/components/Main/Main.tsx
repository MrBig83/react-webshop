import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Breadcrumb, theme } from "antd";

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="main">
      <div style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          Content
          <Products />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:id' element={<SingleProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Main;
