import NavLinks from "../NavLinks/Navlinks";
import "./Header.css";
import Login from "../Login/Login";


const Header = () => {
  return (
    <>
      <div className="Store-title">
        <h1>Grupp 3</h1>
      </div>
      <div>
        <NavLinks />
      </div>
    </>
  );
};
export default Header;
