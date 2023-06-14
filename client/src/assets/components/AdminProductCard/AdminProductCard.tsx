
import "./AdminProductCard.css";
import IProduct from "../../interfaces/IProduct";
function AdminProductCard({ product }: { product: IProduct }) {

  return (
       <div className="adminProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>
      </div>  
  );
}
export default AdminProductCard;
