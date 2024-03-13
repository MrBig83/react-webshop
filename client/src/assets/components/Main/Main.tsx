import { Route, Routes } from "react-router";
import SingleProduct from "../SingleProduct/SingleProduct";
import Products from "../Products/Products";
import ShopingCart from "../ShopingCart/ShopingCart";
import Contact from "../Contact/Contact";
import Checkout from "../Checkout/Checkout";
import OrderConfirm from "../OrderConfirm/OrderConfirm";
import Adminpanel from "../Adminpanel/Adminpanel"
import News from "../News/News";
import Subpage1 from "../News/Sub1/Subpage1";
import Subpage2 from "../News/Sub2/Subpage2";
import Rea from "../Rea/Rea"
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="routes">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/shopingcart" element={<ShopingCart />} />
          <Route path="/kontakta-oss" element={<Contact />} />
          <Route path="/kassa" element={<Checkout />} />
          <Route path="/order" element={<OrderConfirm />} />
          <Route path="/adminpanel" element={<Adminpanel />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/subpage1" element={<Subpage1 />} />
          <Route path="/news/subpage2" element={<Subpage2 />} />

          <Route path="/rea" element={<Rea />} />
        </Routes>
        <div className="sectionLine"></div>
      </div>
    </div>
  );
};
export default Main;
