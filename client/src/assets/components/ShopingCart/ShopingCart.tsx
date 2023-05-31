import { useContext } from "react";
import { MyProductsContext } from "../../../context/productscontext";
import BtnBuyNow from "../BtnBuyNow/BtnBuyNow";
import "./ShopingCart.css";
import CartItemCard from "../CartItem/CartItem";



const ShopingCart = () => {
  const { products } = useContext(MyProductsContext);
  console.log(products);

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {products.map((p) => (
          <div key={p._id} className="shopingcart-product-card">
            <div className="shopingcart-img">
              <img src={p.image} />
            </div>
            <div className="shopingcart-info">
              <h3>{p.title}</h3>
              antal...
              <CartItemCard />
              <BtnBuyNow product={p} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopingCart;
