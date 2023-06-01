// import {useContext} from "react";
import {ICartItem} from '../../interfaces/icartitem';
// import { MyCartItemContext } from "../../../context/CartItemContext";

interface CartItemProps {
  item: ICartItem;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
   item,
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
    <div>
      <img src={item.product.image} alt={item.product.title} />
      <h3>{item.product.title}</h3>
      <p>Antal: {item.quantity ?? 0}</p>
      <p>Pris: {item.product.price * (item.quantity ?? 0)}</p>
      <button onClick={() => handleQuantityChange(item.quantity + 1)}>
        +
      </button>
      <button onClick={() => handleQuantityChange(item.quantity - 1)}>
        -
      </button>
      <button onClick={handleRemove}>Ta bort</button>
    </div>
  );
  }

export default CartItem;