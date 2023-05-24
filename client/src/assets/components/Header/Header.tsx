import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="Store-title">
        <h1>Grupp 3</h1>
      </div>
      <Menu mode={"horizontal"} theme={"light"}>
        <Menu.Item key={"home"} style={{ width: "25%" }}>
          <div className="menu-text">home </div>
        </Menu.Item>
        <Menu.Item key={"Store"} style={{ width: "25%" }}>
          <div className="menu-text">Store </div>
        </Menu.Item>
        <Menu.Item key={"About"} style={{ width: "25%" }}>
          <div className="menu-text">About </div>
        </Menu.Item>
        <Menu.Item key={"Shoppingcart"} style={{ width: "25%" }}>
          <div className="menu-text">
            <div className="shoping-cart">
              <ShoppingCartOutlined />
            </div>
          </div>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Header;
