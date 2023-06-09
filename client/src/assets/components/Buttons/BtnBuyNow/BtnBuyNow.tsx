// GAMMLA==========>
import { useContext, useEffect, useState } from "react";

import "./BtnBuyNow.css";
import IProduct from "../../../interfaces/IProduct";
import { MyCartContext } from "../../../../context/CartContext";

const BtnBuyNow = ({ product }: { product: IProduct }) => {
  const [productInCart, setIsProductsInCart] = useState(false);
  const { addProduct, removeProduct, productIsInCart } =
    useContext(MyCartContext);

  useEffect(() => {
    setIsProductsInCart(productIsInCart(product._id));
  });

  const buyNow = (event: any) => {
    //kan man ha any här?
    event.preventDefault();

    if (productInCart) {
      removeProduct(product._id);
      return;
    }

    addProduct(product);
    
  };

  return (
    <button className="btnbuynow" onClick={buyNow}>
      {productInCart ? "remove" : "add"}
    </button>
  );
};
export default BtnBuyNow;
