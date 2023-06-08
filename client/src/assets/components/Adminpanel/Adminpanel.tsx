import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminpanelProducts from "./AdminProducts"

import "./Adminpanel.css";

const Adminpanel = () => {
    const { data } = useContext(UserContext); //typas (skall vara IuserData)
    if(!data.isAdmin) {
        return (
            <h1>Du får inte vara här.</h1>
        )
    }
    






  return (
    <>
      <h1>Adminpanel</h1>
      <AdminpanelProducts />

    </>
  );
};

export default Adminpanel;