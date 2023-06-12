import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";
import IOrder from "../../interfaces/IOrder";
import AdminOrderCard from  "../AdminOrderCard/AdminOrderCard"
import AdminEditOrderDrawer from "../AdminEditOrderDrawer/AdminEditOrderDrawer"
import "./Adminpanel.css";

function AdminpanelOrders() {

    const { orders } = useContext(OrderContext)
    
    //Kontroll om användaren är behörig eller inte. (Flyttas till adminpanel eller sätt route spärr)
    const { data } = useContext(UserContext)!;  
    if(!data.isAdmin) {return (<h1>Du får inte vara här.</h1>)}
    
  return (
    <>
   
      <div className="AdminOrderList">
      <h1>Administrera ordrar:</h1>
          
        {orders ? orders.map((order:IOrder) => (
          <div className="OrderCardRender" key={order._id}>
            <div className="AdminOrder">
            <AdminOrderCard order={order} />
            {/* <AdminEditOrderDrawer order={order} /> */}
            </div>
          </div>
        )) :null }
      </div>
    </>
  );
}

export default AdminpanelOrders;