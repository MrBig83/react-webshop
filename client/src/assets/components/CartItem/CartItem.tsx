import "./CartItem.css"

import {useContext } from "react";
import { CartItemContext } from "../../../context/CartItemContext"
import { MyProductsContext } from "../../../context/ProductsContext";

// import { IProduct } from "../../interfaces/Interfaces";

function CartItemCard() {
    const msg = useContext(CartItemContext)
    const { products } = useContext(MyProductsContext);
    return (
        <>
            {products.map((p) => (
                <p>{p.title}</p>
            ))}
            <p>{msg}</p>
        </>
    )
}



// function CartItemCard({ product }: { product: IProduct }) {


//   return (
//     <div className="cartItemCard">
//       <img src={product.image} />

//       <div className="ProductCardInfo">
//         <h3>{product.title}</h3>
//         <p>{product.price}:-</p>

//       </div>
//     </div>
//   );
// }
export default CartItemCard;
