import "./productCard.css";
function ProductCard({ product }) {
  // ================== Behövs typas! =================

  return (
    <div className="productcard">
      <img src={product.image} />

      <div className="ProductCardInfo">
        <h3>{product.title}</h3>
      </div>
    </div>
  );
}
export default ProductCard;
