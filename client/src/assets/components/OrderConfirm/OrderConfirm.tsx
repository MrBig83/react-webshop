import { MyCartContext } from "../../../context/CartContext";
import { OrderContext } from "../../../context/OrderContext";
import { UserContext } from "../../../context/UserContext";
import shippingTime from "../../../context/OrderContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
const OrderConfirm = () => {
  const { emptyCart } = useContext(MyCartContext);

  const { data } = useContext(UserContext);
  const {
    orderNumber,
    orderInfo,
    loading,
    street,
    zipcode,
    country,
    city,
    shippingTime,
  } = useContext(OrderContext)!;

  const navigate = useNavigate();
  const current = new Date();
  const futureDate = new Date(
    current.getTime() + shippingTime.deliveryTimeInHours * 60 * 60 * 1000
  );

  //   början  på redirect funktion
  const redirectUser = (orderNumber: number) => {
    useEffect(() => {
      if ((orderNumber = 0)) navigate("/");
    });
  };

  useEffect(() => {
    emptyCart([]);
    localStorage.clear();
  }, []);

  return (
    <div>
      <h1>Orderbekräftelse</h1>
      {loading ? (
        <Spin tip="Processing order..." />
      ) : (
        <div>
          <h3>Ordernummer: {orderNumber}</h3>
          {orderInfo.map((p) => (
            <div>
              <p>
                {p.product.title} x {p.quantity}
              </p>
              <p>{p.product.price}:-</p>
            </div>
          ))}
          <p>Leverantör {shippingTime.company}</p>
          <p>Leveransdatum: {futureDate.toLocaleDateString()} </p>
          <p>Förnamn: {data.firstName}</p>
          <p>Efternamn: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Gata: {street}</p>
          <p>Postnummer: {zipcode}</p>
          <p>Stad: {city}</p>
          <p>Land: {country}</p>
        </div>
      )}
    </div>
  );
};

export default OrderConfirm;
