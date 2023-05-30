// import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

import { ShoppingCartOutlined } from "@ant-design/icons";

import { Drawer } from "antd";
import { useState } from "react";

import "./NavLink.css";
import ShopingCart from "../ShopingCart/ShopingCart";

function NavLinks() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="menu-container">
      <ul>
        <li>
          <NavLink to="/">hem</NavLink>
        </li>
        <li>
          <NavLink to="/produkter">produkter</NavLink>
        </li>
        <li>
          <NavLink to="/rea">rea</NavLink>
        </li>
        <li>
          <NavLink to="/kontakta-oss">kontakta oss</NavLink>
        </li>
        <li className="shopingcart-container">
          <NavLink className={"shopingcart-icon"} to="">
            <ShoppingCartOutlined onClick={showDrawer} />
            <Drawer
              title="Kundvagn"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <ShopingCart />
            </Drawer>
          </NavLink>
          <Login />
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
