
import { useContext } from "react";
import { MyCartContext } from "../../../context/CartContext";
import CartItem from "../Cartitem/CartItem";
const ShoppingCart = () => {
  const { items, updateItemQuantity, removeItem, calculateTotal } =
    useContext(MyCartContext);

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
            _id={""}
            quantity={0}
            price={0}
          />
        ))}
      </div>
      <h3>Kundvagns belopp: {calculateTotal()} kr</h3>
    </>
  );
};

export default ShoppingCart;
