// import React, { useEffect, useState } from "react";
// import Link from "react-router-dom"
import IProduct from "../../interfaces/Interfaces";
import "./AdminProductCard.css"
import BtnAdminEditProduct from "../BtnAdminEditProduct/BtnAdminEditProduct"

// interface CartItemProps {
//   product: IProduct;
//   onQuantityChange: (productId: string, quantity: number) => void;
//   onRemove: (productId: string) => void;
// }

function AdminProductCard({ product }: { product: IProduct}) {


  return (
    <div className="adminProductCard">
    
        <div className="AdminProductCardInfo">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}:-</p>

        <BtnAdminEditProduct product={product} />

        </div>
  </div>
  );
}


export default AdminProductCard;