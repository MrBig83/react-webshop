import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import IProduct from "../../interfaces/IProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:3000/api/products`);
      const data = await response.json();

      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [products]);

  return (
    <div className="ProductList">
      {products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product._id}>
          <Link to={`/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
