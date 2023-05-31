import BtnBuyNow from "../BtnBuyNow/BtnBuyNow";
import "./productCard.css";
import { IProduct } from "../../interfaces/Interfaces";

function ProductCard({ product }: { product: IProduct }) {

  return (
    <div className="productcard">
      <img src={product.image} />

      <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>

        <BtnBuyNow product={product} />

      </div>
    </div>
  );
}
export default ProductCard;
