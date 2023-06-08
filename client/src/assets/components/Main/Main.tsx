import { Route, Routes } from "react-router";

import SingleProduct from "../SingleProduct/SingleProduct";
import Products from "../Products/Products";
import ShopingCart from "../ShopingCart/ShopingCart";
import Contact from "../Contact/Contact";
import Checkout from "../Checkout/Checkout";
import OrderConfirm from "../OrderConfirm/OrderConfirm";
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
        </Routes>
        <div className="sectionLine"></div>
      </div>
    </div>
  );
};
export default Main;
