import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
// import { ProductContext} from "../../../context/ProductContext"
import {  ProductContext } from "../../../context/ProductContext"
import IProduct from "../../interfaces/IProduct";
import AdminProductCard from "../AdminProductCard/AdminProductCard"
import { Link } from "react-router-dom";
import AdminEditDrawer from "../AdminEditDrawer/AdminEditDrawer"


import "./Adminpanel.css";

function AdminpanelProducts() {

    const { products } = useContext(ProductContext)!;
    const { data } = useContext(UserContext)!; //typas (skall vara IuserData)

    // console.log(products);
    
    
    if(!data.isAdmin) {
        return (
            <h1>Du får inte vara här.</h1>
        )
    }
    





    
  return (
    <>
      <h1>Administrera produkter här:</h1>
      <div className="AdminProductList">
      {products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product._id}>
          <AdminProductCard product={product} />
          <AdminEditDrawer product={product}/>
          
        </div>
      ))}
      </div>
      

    </>
  );
};

export default AdminpanelProducts;