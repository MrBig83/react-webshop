import NavLinks from "../NavLinks/Navlinks";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Store-title">
        <div className="image_div">
        <NavLink to="/"><img className="logo" src="/matjo_logga.svg" alt="logo" /></NavLink>
        </div>
      </div>
      <div>
        <NavLinks />
      </div>
    </>
  );
};
export default Header;
