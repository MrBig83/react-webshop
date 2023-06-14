import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import BtnBuyNow from "../Buttons/BtnBuyNow/BtnBuyNow";
import IProduct from "../../interfaces/IProduct";
// import Products from "../Products/Products";

const defaultProduct: IProduct = {
  _id: "",
  categories: [],
  description: "",
  image: "",
  inStock: 0,
  price: 0,
  title: "",
};

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [product, id]);

  let lager = "";

  if (product.inStock < 1) {
    lager = "Slut i lager"
  } else if (product.inStock < 5) {
    lager = "Få i lager"
  }
  if (product.inStock >= 5) {
    lager = "Finns i lager"
  }

  return (
    <div className="SingleProduct">
      <div className="title">
        <img src={product.image}/>
      </div>
      <div className="info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price} :-</p>
        <p>{lager}</p>
        <BtnBuyNow product={product} />
      </div>
      <br />
      <br />
      <div className="link-singleproduct">
      <Link to={`/`}>Tillbaka till huvudsidan</Link>
      </div>
    </div>
  );
};
export default SingleProduct;
