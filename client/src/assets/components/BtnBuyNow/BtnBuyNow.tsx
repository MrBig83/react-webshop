import { useContext, useEffect, useState } from "react";
import { MyProductsContext } from "../../../context/productscontext";
import "./BtnBuyNow.css";
import IProduct from "../../interfaces/Interfaces";

const BtnBuyNow = ({ product }: { product: IProduct }) => {
  const [productInCart, setIsProductsInCart] = useState(false);
  const { addProduct, removeProduct, ProductIsInCart } =
    useContext(MyProductsContext);

  useEffect(() => {
    setIsProductsInCart(ProductIsInCart(product._id));
  });

  const buyNow = (event) => {
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
