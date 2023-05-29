import "./BtnBuyNow.css"

import { useEffect, useState } from "react";
import MyProductsProvider from "../../../context/ProductsContext";

export default function BtnBuyNow({ product }) {
  const [buyProduct, setbuyProduct] = useState(false);
  const { addProduct } = MyProductsProvider; //useproductContext
  useEffect(() => {
    setbuyProduct(product._id);
  });


  const handleClick = (event) => { // =========== TYPAS! ==============
    event.preventDefault();
    // if (buyProduct) {
    //   removeProduct(product.id);
    //   return;
    // }
    addProduct(product._id);
  };
  return (
    <>
      <button color="inerhit" onClick={handleClick}>
        {/* conditional rendering kolla om det är sant annars... */}
        {buyProduct ? "Remove" : "Add"}
      </button>
    </>
  );
}

























// const BtnBuyNow = () => {

//     function buyNow(){
//         console.log("click"); //Byt ut detta till önskad funktionalitet. Typ att lägga in varorna i en object-array i LocalStorage eller i databasen. 
        
//     }

//     return (
//         <div className="btnbuynow" onClick={buyNow}>
//             <p>Köp</p>
//         </div>
//     )
// }
// export default BtnBuyNow;


//export default BtnBuyNow;