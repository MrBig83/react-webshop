import { MyCartContext } from "../../../context/CartContext";
import { OrderContext } from "../../../context/OrderContext";
import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const OrderConfirm = () => {
  const { orderNumber, orderInfo } = useContext(OrderContext)!;
  const { emptyCart } = useContext(MyCartContext);
  // const navigate = useNavigate();

  //   början  på redirect funktion
  // const redirectUser = (orderNumber: number) => {
  //   useEffect(() => {
  //     if ((orderNumber = 0)) navigate("/");
  //   });
  // };

  useEffect(() => {
    emptyCart([]);
  }, []);

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
