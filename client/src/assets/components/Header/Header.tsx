import NavLinks from "../NavLinks/Navlinks";
import "./Header.css";
// import Login from "../Login/Login";

const Header = () => {
  return (
    <>
      <div className="Store-title">
        <div className="image_div">
          <img className="logo" src="/matjo_logga.svg" alt="logo" />
        </div>
      </div>
      <div>
        <NavLinks />
      </div>
    </>
  );
};
export default Header;
