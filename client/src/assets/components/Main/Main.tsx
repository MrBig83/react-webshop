import { Route, Routes } from "react-router";

import SingleProduct from "../SingleProduct/SingleProduct";
import Products from "../Products/Products";
import ShopingCart from "../ShopingCart/ShopingCart";
import Contact from "../Contact/Contact";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<SingleProduct />} />
      <Route path="/shopingcart" element={<ShopingCart />} />
      <Route path="/kontakta-oss" element={<Contact />} />

    </Routes>
  );
};
export default Main;
