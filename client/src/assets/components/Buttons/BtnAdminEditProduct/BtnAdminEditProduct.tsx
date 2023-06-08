import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./BtnAdminEditProduct.css";


const BtnAdminEditProduct = () => {


  return (

    <button className="BtnAdminEditProduct" >
        <NavLink to="/">Hem :P</NavLink>
    </button>
  ); 
};
export default BtnAdminEditProduct;