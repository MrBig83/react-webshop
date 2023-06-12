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
      <h1>Administrera ordrar här:</h1>
      <div className="AdminOrderList">
          
        {orders ? orders.map((order:IOrder) => (
          <div className="OrderCardRender" key={order._id}>
            <AdminOrderCard order={order} />
            {/* <AdminEditOrderDrawer order={order} /> */}
          </div>
        )) :null }
      </div>
    </>
  );
}

export default AdminpanelOrders;