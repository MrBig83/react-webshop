import BtnAdminEditProduct from "../Buttons/BtnAdminEditProduct/BtnAdminEditProduct"
import "./AdminProductCard.css";
// import {  ProductContext } from "../../../context/ProductContext"

import IProduct from "../../interfaces/IProduct";
function AdminProductCard({ product }: { product: IProduct }) {
  // ================== Behövs typas! =================
  // const { products } = useContext(ProductContext)!;

  return (
       <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>

        <BtnAdminEditProduct product={product}/>
      </div>  
  );
}
export default AdminProductCard;
