import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import IProduct from "../../../interfaces/IProduct";

import "./BtnAdminEditProduct.css";


const BtnAdminEditProduct = ({ product }: { product: IProduct }) => {


  return (

    <button className="BtnAdminEditProduct" >
      Redigera
        {/* <NavLink to="/">Redigera</NavLink> */}
    </button>
  ); 
};
export default BtnAdminEditProduct;