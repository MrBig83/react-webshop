import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

import { ShoppingCartOutlined } from "@ant-design/icons";

import { Drawer } from "antd";
import { useContext, useState } from "react";

import "./NavLink.css";
import ShopingCart from "../ShopingCart/ShopingCart";
import { UserContext } from "../../../context/UserContext";
import Item from "antd/es/list/Item";
import { MyCartContext } from "../../../context/CartContext";

function NavLinks() {
  const { data } = useContext(UserContext)!;
  const [open, setOpen] = useState(false);
  const { items } = useContext(MyCartContext);
  
  
   let quant = items.map((i) => i.quantity)
   let sum = quant.reduce(function (a, b) {
     return a + b;
   }, 0);
   console.log(sum);

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
      </ul>
      <ul className="menu-right">
        <li className="shopingcart-container">
          <div className={"shopingcart-icon"}>
            <ShoppingCartOutlined onClick={showDrawer} />
            <p>{sum}</p>
            <Drawer
              title="Kundvagn"
              placement="right"
              onClose={onClose}
              open={open}
              >
              <ShopingCart />
              <button>
                <NavLink to="/kassa">Till kassa</NavLink>
              </button>
            </Drawer>
          </div>
        </li>
        <li>
          <Login />
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
