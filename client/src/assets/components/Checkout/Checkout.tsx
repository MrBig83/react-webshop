import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShopingCart from "../ShopingCart/ShopingCart";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

import "./Checkout.css";
const Checkout = () => {
  const { data } = useContext(UserContext);
  if (!data._id) {
    return <h1>För att lägga en order behöver du logga in</h1>;
  }
  return (
    <>
      <h1>Kassa</h1>
      <ShopingCart />
      <CheckoutForm />
    </>
  );
};

export default Checkout;
