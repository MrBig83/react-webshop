import { NavLink } from "react-router-dom";
import Login from "../Login/Login";
import ShopingCart from "../ShopingCart/ShopingCart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { UserContext } from "../../../context/UserContext";
import { Drawer } from "antd";
import { useContext, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./NavLink.css";
import BtnAdminpanel from "../Buttons/BtnAdminpanel/BtnAdminpanel";
import "./NavLink.css";
import { MyCartContext } from "../../../context/CartContext";



function NavLinks() {
  const { data } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const { items } = useContext(MyCartContext);
  
  const quant = items.map((i) => i.quantity);
  const sum = quant.reduce(function (a, b) {
    return a + b;
  }, 0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="menu-container">
      <div className="menu-left">
        <MobileMenu />
        <p>
          {data.firstName} {data.lastName}
        </p>
      </div>
      <ul className="main-menu">
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/news">Nyheter</NavLink>
        </li>
        <li>
          <NavLink to="/rea">rea</NavLink>
        </li>
        <li>
          <NavLink to="/kontakta-oss">kontakta oss</NavLink>
        </li>
      </ul>
      <ul className="menu-right">
        {data.isAdmin ? <BtnAdminpanel /> : ""}

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
              
              {sum >0 ? <>
              {data._id ? (
                <button className="btnStyle" >
                <NavLink to="/kassa" onClick={onClose}>
                  Till kassan
                </NavLink>
              </button>
                ) : (
                <p>Logga in för att forsätta</p>
                )}
              </> :
               <p>Inga varor i varukorgen</p>} 
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
