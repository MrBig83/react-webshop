/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyCartContext } from "../../../context/CartContext";
import CartItem from "../Cartitem/CartItem";
// import ProductCard from "../ProductCard/ProductCard";
// import Products from "../Products/Products";
//BEHÖVS TYPAS FILEN ÄR RÖD?
const ShoppingCart = () => {
  const { items, updateItemQuantity, removeItem } = useContext(MyCartContext);

  const calculateTotal = () => {
    let total = 0;

    items.forEach((item) => {
      if (
        typeof item.product?.price === "number" &&
        typeof item.quantity === "number" &&
        !isNaN(item.product?.price) &&
        !isNaN(item.quantity)
      ) {
        total += item.product?.price * item.quantity;
      }
    });

    return total;
  };
  console.log("items:", items);
  console.log("total:", calculateTotal());

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {items.map((item) => (
          <CartItem
            key={item.product?._id}
            product={item.product}
            onQuantityChange={updateItemQuantity}
            onRemove={removeItem}
            item={item}
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
