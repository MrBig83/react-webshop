import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./BtnAdminpanel.css";


const BtnAdminpanel = () => {


  return (
    <button className="btnStyleAdmin" >
        <NavLink to="/adminpanel">Adminpanel</NavLink>
    </button>
  );
};
export default BtnAdminpanel;
