import BtnBuyNow from "../BtnBuyNow/BtnBuyNow";
import "./productCard.css";

function ProductCard({ product }) {
  // ================== Behövs typas! =================

  return (
    <div className="productcard">
      <img src={product.image} />

      <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        
          <BtnBuyNow />
        
      </div>
    </div>
  );
}
export default ProductCard;
