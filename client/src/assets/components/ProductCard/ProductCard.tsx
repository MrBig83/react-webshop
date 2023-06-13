import BtnBuyNow from "../Buttons/BtnBuyNow/BtnBuyNow";
import "./productCard.css";
import "../Buttons/BtnStyle/BtnStyle.css"
// import { ICartItem } from "../../interfaces/ICartItem";
import IProduct from "../../interfaces/IProduct";
function ProductCard({ product }: { product: IProduct }) {
  // ================== Behövs typas! =================
let lager = "";
let lagerBool = true

const buyNow = (event: any) => {
  //kan man ha any här?
  event.preventDefault();
}

if (product.inStock < 1) {
  lager = "Slut i lager"
  lagerBool = false
} else if (product.inStock < 5) {
  lager = "Få i lager"
}
if (product.inStock >= 5) {
  lager = "Finns i lager"
}

  return (
    <div className="productcard">
      <img src={product.image} />

      <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>
        <p>{lager}</p>
        {lagerBool ? 
        <BtnBuyNow product={product} />
        : <button className="disabled" onClick={buyNow}>Kan ej köpas</button> } 
      </div>
    </div>
  );
}
export default ProductCard;
