import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShopingCart from "../ShopingCart/ShopingCart";
import OrderContextProvider from "../../../context/OrderContext";

import "./Checkout.css";
const Checkout = () => {
  return (
    <>
      <h1>Kassa</h1>
      <ShopingCart />
      <CheckoutForm />
    </>
  );
};

export default Checkout;
