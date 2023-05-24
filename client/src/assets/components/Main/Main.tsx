import Products from "../Products/Products";
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
        </div>
      </div>
    </div>
  );
};
export default Main;
