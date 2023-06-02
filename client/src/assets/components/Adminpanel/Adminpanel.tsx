import { useEffect, useState } from "react";

import AdminProductCard from "../AdminProductCard/AdminProductCard"
import IProduct from "../../interfaces/Interfaces";

import "./Adminpanel.css";

const Adminpanel = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(`http://localhost:3000/api/products`);
        const data = await response.json();
  
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
    useEffect(() => {}, [products]); // ======== {} ger felkod. 
  
  return (
    <>
      
      <div>
        <p>Här ska vi ha CRUD för produkter</p>
      </div>
      <div>
        <input type="text" placeholder="Sök" />
        <button>Sök</button>
      </div>
      <div><p>Produktlista:</p>
      <p>Här skall det finnas en "Lägg till"-knapp. Använd uppdateringsformuläret som mall</p></div>
      
      <div className="ProductList">
      {products.map((product: IProduct) => (
        <div className="ProductCardRender">
          {/* <Link key={product._id} to={`/${product._id}`}> */}
            <AdminProductCard key={product._id} product={product} />
          {/* </Link> */}
        </div>
      ))}
    </div>
        
      
    </>
  );
};

export default Adminpanel;
