import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import IProduct from "../../interfaces/Interfaces";
import BtnBuyNow from "../BtnBuyNow/BtnBuyNow";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:3000/api/products`);
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {}, [products]);

  return (
    <div>
      <div className="ProductList">
        {products.map((product: IProduct) => (
          <div className="ProductCardRender">
            <Link key={product._id} to={`/${product._id}`}>
              <ProductCard product={product} />
            </Link>
            <BtnBuyNow />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
