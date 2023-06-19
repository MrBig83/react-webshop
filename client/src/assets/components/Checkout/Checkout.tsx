import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShopingCart from "../ShopingCart/ShopingCart";
import { UserContext } from "../../../context/UserContext";
import { MyCartContext } from "../../../context/CartContext";
import { useContext } from "react";

import "./Checkout.css";
const Checkout = () => {
  const { data } = useContext(UserContext);
  const { items } = useContext(MyCartContext);
  console.log(items);

  if (!data._id) {
    return <h1>För att lägga en order behöver du logga in</h1>;
  } else if (!items.length) {
    return <h1>Inga varor i kundvagnen</h1>;
  } else
    return (
      <>
        <h1>Kassa</h1>
        <ShopingCart />
        <CheckoutForm />
      </>
    );
};

export default Checkout;
