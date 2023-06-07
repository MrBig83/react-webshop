/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import IProduct from "../../interfaces/Interfaces";

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
    <div className="ProductList">
      {products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product._id}>
          <Link key={product._id} to={`/${product._id}`}>
            <ProductCard key={product._id} product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;
