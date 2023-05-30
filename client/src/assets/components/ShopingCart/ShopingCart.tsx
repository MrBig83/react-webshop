import { useContext } from "react";
import { MyProductsContext } from "../../../context/productscontext";

const ShopingCart = () => {
  const { products } = useContext(MyProductsContext);
  console.log(products);

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {products.map((p) => (
          <div key={p._id}>
            <img src={p.image} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopingCart;
