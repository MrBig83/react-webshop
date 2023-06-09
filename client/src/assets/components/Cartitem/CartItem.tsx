import React from "react";
import { ICartItem } from "../../interfaces/ICartItem";
import BtnsInCart from "../Buttons/BtnsInCart/BtnsInCart";
import "./CartItem.css";
const Cartproduct: React.FC<ICartItem> = ({
  product: item,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(item.product._id, quantity);
  };

  const handleRemove = () => {
    onRemove(item.product._id);
  };

  return (
    <div className="cartItem">
      <img src={item.product.image} alt={item.product.title} />
      <h3>{item.product.title}</h3>
      <p>Antal: {item.quantity ?? 1}</p>
      <p>Pris: {item.product.price * (item.quantity ?? 1)}</p>
      <BtnsInCart
        label="+"
        onClick={() =>
          handleQuantityChange(isNaN(item.quantity) ? 1 : item.quantity + 1)
        }
      />
      <BtnsInCart
        label="-"
        onClick={() => handleQuantityChange(item.quantity - 1)}
      />
      <BtnsInCart label="Ta bort" onClick={handleRemove} />
    </div>
  );
};

export default Cartproduct;
