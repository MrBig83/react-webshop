import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import {  ProductContext } from "../../../context/ProductContext"
import IProduct from "../../interfaces/IProduct";
import AdminProductCard from "../AdminProductCard/AdminProductCard"
import AdminEditDrawer from "../AdminEditDrawer/AdminEditDrawer"
import AdminAddProductDrawer from "../AdminAddProductDrawer/AdminAddProductDrawer"

import "./Adminpanel.css";

function AdminpanelProducts() {

    const { products } = useContext(ProductContext);
    const { data } = useContext(UserContext);  
    
    if(!data.isAdmin) {
        return (
            <h1>Du får inte vara här.</h1>
        )
    }
    
  return (
    <div className="AdminPanelProductList">

   <div className="newProductAdmin"> 
   <h1>Lägg till ny produkt:</h1>
  <AdminAddProductDrawer />
   </div>
  
      <div className="AdminProductList">
      <h1>Administrera produkter:</h1>
      {products ? products.map((product: IProduct) => (
        <div className="ProductCardRender" key={product._id}>
          <div className="AdminProduct">
          <AdminProductCard product={product} />
          <AdminEditDrawer product={product}/>
          </div>         
        </div>

      )) :null }
      </div>
      

    </div>
  );
}

export default AdminpanelProducts;