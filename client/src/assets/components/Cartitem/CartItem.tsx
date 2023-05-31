import React from "react";
import IProduct from "../../interfaces/Interfaces";
interface CartItemProps {
  product: IProduct;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(product._id, quantity);
  };

  const handleRemove = () => {
    onRemove(product._id);
  };

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Antal: {product.quantity}</p>
      <p>Pris: {product.price * product.quantity}</p>
      <button onClick={() => handleQuantityChange(product.quantity + 1)}>
        +
      </button>
      <button onClick={() => handleQuantityChange(product.quantity - 1)}>
        -
      </button>
      <button onClick={handleRemove}>Ta bort</button>
    </div>
  );
};

export default CartItem;
