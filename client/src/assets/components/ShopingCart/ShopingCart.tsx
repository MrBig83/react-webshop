/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext } from "react";
import { MyCartContext } from "../../../context/CartContext";
import CartItem from "../Cartitem/CartItem";
// import ProductCard from "../ProductCard/ProductCard";
// import Products from "../Products/Products";
//BEHÖVS TYPAS FILEN ÄR RÖD?
const ShoppingCart = () => {
  const { items, updateItemQuantity, removeItem, calculateTotal } =
    useContext(MyCartContext);

  // console.log("items:", items);
  // console.log("total:", calculateTotal());

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {items.map((item) => (
          <CartItem
            key={item.product?._id}
            product={item}
            onQuantityChange={updateItemQuantity}
            onRemove={removeItem}
            item={item.product}
            image={item.product.image}
            title={""}
            _id={""}
            quantity={0}
            price={0}
          />
        ))}
      </div>
      <h3>Totalbelopp: {calculateTotal()} kr</h3>
    </>
  );
};

export default ShoppingCart;
