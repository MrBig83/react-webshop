import { useContext, useEffect } from "react";
import { MyOrderContext } from "../../../context/OrderContext";

const OrderList = () => {
  const { orders, getAllOrders } = useContext(MyOrderContext);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}>
          {" "}
          <img src={order.item.product.image} alt={item.product.title} />
          <h3>{order.item.product.title}</h3>
        </div>
      ))}
    </div>
  );
};
