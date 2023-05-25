import Products from "../Products/Products";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { theme } from "antd";

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="main">
      <div style={{ padding: "0 50px" }}>
        <Breadcrumbs />
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <h3>Här kan vi ha en karusell som är jättefin</h3>
          <Products />
        </div>
      </div>
    </div>
  );
};
export default Main;
