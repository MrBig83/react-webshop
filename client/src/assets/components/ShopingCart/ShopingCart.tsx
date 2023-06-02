import { useContext } from "react";
import { MyCartItemContext } from "../../../context/CartItemContext";
import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = () => {
  const { items, addItem, removeItem } = useContext(MyCartItemContext);
  console.log(items);

  const calculateTotal = () => {
    let total = 0;
    items.forEach((i) => {
      // Kontrollera att både p.price och p.quantity är giltiga numeriska värden innan du utför beräkningen
      if (
        typeof i.product.price === "number" &&
        typeof i.quantity === "number" &&
        !isNaN(i.product.price) &&
        !isNaN(i.quantity)
      ) {
        total += i.product.price * i.quantity;
      }
    });
    return total;
  };

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {items.map((i) => (
          <CartItem
            key={i.product._id}
            item={i}
            onQuantityChange={addItem}
            onRemove={removeItem}
          />
        ))}
      </div>
      <h3>Totalbelopp: {calculateTotal()} kr</h3>
    </>
  );
};

export default ShoppingCart;

// import { useContext } from "react";
// import { MyProductsContext } from "../../../context/productscontext";
// import CartItem from "../Cartitem/CartItem";

// const ShoppingCart = () => {
//   const { products, updateProductQuantity, removeProduct } =
//     useContext(MyProductsContext);
//   console.log(products);

//   const calculateTotal = () => {
//     let total = 0;
//     products.forEach((p) => {
//       total += p.price * p.quantity;
//     });
//     return total;
//   };

//   return (
//     <>
//       <h2>Dina varor</h2>
//       <div>
//         {products.map((p) => (
//           <CartItem
//             key={p._id}
//             product={p}
//             onQuantityChange={updateProductQuantity}
//             onRemove={removeProduct}
//           />
//         ))}
//       </div>
//       <h3>Totalbelopp: {calculateTotal()} kr</h3>
//     </>
//   );
// };

// export default ShoppingCart;
