import { useContext } from "react";
import { MyProductsContext } from "../../../context/productscontext";

const ShopingCart = () => {
  const { products } = useContext(MyProductsContext);
  return (
    <>
      <div>
        {products.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      hej
    </>
  );
};

export default ShopingCart;
