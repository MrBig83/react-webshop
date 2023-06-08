import { OrderContext } from "../../../context/OrderContext";
import { useContext } from "react";
const OrderConfirm = () => {
  const { orderNumber, orderInfo } = useContext(OrderContext)!;

  return (
    <div>
      <h1>Orderbekräftelse</h1>
      <h3>Ordernummer: {orderNumber}</h3>
      {orderInfo.map((p) => (
        <div>
          <p>
            {p.product.title} x {p.quantity}
          </p>
          <p>{p.product.price}:-</p>
        </div>
      ))}
    </div>
  );
};

export default OrderConfirm;
