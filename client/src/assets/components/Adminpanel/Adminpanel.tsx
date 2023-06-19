import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminpanelProducts from "./AdminProducts"
import AdminpanelOrders from "./AdminOrders";
import "./Adminpanel.css";
import OrderContextProvider from "../../../context/OrderContext";
import ProductContextProvider from "../../../context/ProductContext";

const Adminpanel = () => {
    const { data } = useContext(UserContext); 
    if(!data.isAdmin) {
        return (
            <h1>Du får inte vara här.</h1>
        )
    }
  return (
    
  <ProductContextProvider>
    <OrderContextProvider>
      <div className="admin-title">
        <h1>Adminpanel</h1>
      </div>
      <div className="AdminPanel">
        <AdminpanelProducts />
        <AdminpanelOrders />
      </div>
    </OrderContextProvider>
  </ProductContextProvider>
    
  );
};

export default Adminpanel;