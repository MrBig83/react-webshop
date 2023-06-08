import BtnAdminEditProduct from "../Buttons/BtnAdminEditProduct/BtnAdminEditProduct"
import "./AdminProductCard.css";

import IProduct from "../../interfaces/IProduct";
function AdminProductCard({ product }: { product: IProduct }) {
  // ================== Behövs typas! =================

  return (
       <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>

        <BtnAdminEditProduct />
      </div>  
  );
}
export default AdminProductCard;
