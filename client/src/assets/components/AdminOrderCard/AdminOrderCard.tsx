import AdminEditOrderDrawer from "../AdminEditOrderDrawer/AdminEditOrderDrawer"
import "./AdminOrderCard.css";
import "../Buttons/BtnStyle/BtnStyle.css"

function AdminOrderCard({ order }: { order: any }) {
  return (
       <div className="OrderCardInfo">
        <h3>{order.orderNumber}</h3>
        {(!order.shipped ? 
        <>
          <p>Behöver behandlas!</p> 
          <AdminEditOrderDrawer order={order} />  
        </>
        :<>
          <p>Färdig</p> 
          <button className="btnStyleCompleted">Orden är klar</button>
        </>
        )}
      </div>  
  );
}
export default AdminOrderCard;