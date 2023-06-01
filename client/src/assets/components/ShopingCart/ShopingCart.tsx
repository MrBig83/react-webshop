import { useContext } from "react";
import { MyProductsContext } from "../../../context/productscontext";
import CartItem from "../Cartitem/CartItem";

const ShoppingCart = () => {
  const { products, updateProductQuantity, removeProduct } =
    useContext(MyProductsContext);
  console.log(products);

  const calculateTotal = () => {
    let total = 0;
    products.forEach((p) => {
      // Kontrollera att både p.price och p.quantity är giltiga numeriska värden innan du utför beräkningen
      if (
        typeof p.price === "number" &&
        typeof p.quantity === "number" &&
        !isNaN(p.price) &&
        !isNaN(p.quantity)
      ) {
        total += p.price * p.quantity;
      }
    });
    return total;
  };

  return (
    <>
      <h2>Dina varor</h2>
      <div>
        {products.map((p) => (
          <CartItem
            key={p._id}
            product={p}
            onQuantityChange={updateProductQuantity}
            onRemove={removeProduct}
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
