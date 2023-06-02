import BtnBuyNow from "../BtnBuyNow/BtnBuyNow";
import "./productCard.css";
import IProduct from "../../interfaces/iproduct";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="productcard">
      <img src={product.image} alt="Product" />

      <div className="ProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.price}:-</p>

        <BtnBuyNow product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
