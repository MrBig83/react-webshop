import { Route, Routes } from "react-router";

import SingleProduct from "../SingleProduct/SingleProduct";
import Products from "../Products/Products";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<SingleProduct />} />
    </Routes>
  );
};
export default Main;
