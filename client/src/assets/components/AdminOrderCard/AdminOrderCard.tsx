import BtnAdminEditProduct from "../Buttons/BtnAdminEditProduct/BtnAdminEditProduct"
import "./AdminOrderCard.css";
// import {  ProductContext } from "../../../context/ProductContext"

import IProduct from "../../interfaces/IProduct";
function AdminOrderCard({ order }: { order: any }) {
  // ================== Behövs typas! =================
  // const { products } = useContext(ProductContext)!;

  return (
       <div className="OrderCardInfo">
        <h3>{order.orderNumber}</h3>
        {(order.shipped ? <p>Färdig</p> : <p>Behöver behandlas!</p> )}
        {/* Knappen för att öppna sidopanelen finns i AdminProducts */}
        {/* <BtnAdminEditProduct product={product}/> */}
      </div>  
  );
}
export default AdminOrderCard;
