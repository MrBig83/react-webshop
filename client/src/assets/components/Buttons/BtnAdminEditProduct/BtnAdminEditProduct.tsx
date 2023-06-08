import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./BtnAdminEditProduct.css";


const BtnAdminEditProduct = () => {


  return (

    <button className="BtnAdminEditProduct" >
      Redigera
        {/* <NavLink to="/">Redigera</NavLink> */}
    </button>
  ); 
};
export default BtnAdminEditProduct;