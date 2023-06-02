import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

import { ShoppingCartOutlined } from "@ant-design/icons";

import { Drawer } from "antd";
import { useContext, useState } from "react";

import "./NavLink.css";
import BtnAdminpanel from "../BtnAdminpanel/BtnAdminpanel";
import ShopingCart from "../ShopingCart/ShopingCart";
import { UserContext } from "../../../context/UserContext";

function NavLinks() {
  const { data } = useContext(UserContext)!;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="menu-container">
      <p className="menu-left">
        {data.firstName} {data.lastName}
        {(data.isAdmin ? " Admin: Ja":" Admin: Nej")}
      </p>
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
          <li>
            <BtnAdminpanel />
          </li>
      </ul>
      <ul className="menu-right">
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
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
