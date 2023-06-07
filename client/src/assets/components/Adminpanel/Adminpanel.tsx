/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState, useContext } from "react";

import AdminProductCard from "../AdminProductCard/AdminProductCard"
import IProduct from "../../interfaces/Interfaces";
import BtnAdminAddProduct from "../BtnAdminAddProduct/BtnAdminAddProduct"

// import { MyProductsContext } from "../../../context/productscontext";

import "./Adminpanel.css";

const Adminpanel = () => {
  // const { products } = useContext(MyProductsContext);
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
    <>
      

      {/* <div>
        <input type="text" placeholder="Sök" />
        <button>Sök</button>
      </div> */}

      <div><p>Produktlista:</p>
      <BtnAdminAddProduct />
      
      </div>
      
      <div className="ProductList" >
      {products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product._id}>
            <AdminProductCard key={product._id} product={product} />
        </div>
      ))}
    </div>
        
      
    </>
  );
};

export default Adminpanel;
