import { useContext } from "react";
import { MyProductsContext } from "../../../context/productscontext";
// import { ICartItem } from "../../interfaces/ICartItem";
// import CartItem from "../CartItem/CartItem";


// //Ninja
// import React from "react"

// interface ICartProps {
//   cartItems: ICartItem[];
//   onRemove(cartItem: ICartItem): void;
//   onUpdateQuantity(cartItem: ICartItem): void; 
// }
// class ShopingCart2 extends React.Component<ICartProps, object> {

// calculateTotal(): number {
//   let total = 0;
//   this.props.cartItems.forEach((item)=> {
//     total += (item.product.price * item.quantity);
//   });
//   return total;
// }
// }

// //Ninja





const ShopingCart = () => {
  const { products } = useContext(MyProductsContext);
  console.log(products);

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {/* <CartItem /> */}
        {products.map((p) => (
          <div key={p._id}>
            <img src={p.image} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopingCart;
