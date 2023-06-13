import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminpanelProducts from "./AdminProducts"
import AdminpanelOrders from "./AdminOrders";

import "./Adminpanel.css";

const Adminpanel = () => {
    const { data } = useContext(UserContext); //typas (skall vara likadant som order och product)
    if(!data.isAdmin) {
        return (
            <h1>Du får inte vara här.</h1>
        )
    }
    
  return (
    <>
    <div className="admin-title">
      <h1>Adminpanel</h1>
      </div>
      <div className="AdminPanel">
      <AdminpanelProducts />
      <AdminpanelOrders />
      </div>
    </>
  );
};

export default Adminpanel;