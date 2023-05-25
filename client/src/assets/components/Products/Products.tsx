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
      console.log(data[0]);

      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // console.log(products);
  }, [products]);

  return (
    <div>
      <div className="ProductList">
        {products.map((product: IProduct) => (
          <Link key={product._id} to={`/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Products;
