// import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./NavLink.css";
function NavLinks() {
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
          <NavLink className={"shopingcart-icon"} to="/shopingcart">
            <ShoppingCartOutlined />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
