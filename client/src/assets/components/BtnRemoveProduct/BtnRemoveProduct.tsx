
// import { useContext, useEffect, useState } from "react";


import IProduct from "../../interfaces/Interfaces";
import { Button } from 'antd';

const BtnRemoveProduct = ({ product }: { product: IProduct }) => {
  
  //removeProduct(product._id); //Nu försöker den deleta alla produkter.... ooops...
  
  async function removeProduct(id:string){ 
      const response = await fetch (`/api/products/${id}`,{
          method: "DELETE", 
          headers: {
              "Content-Type": "application/json"           
          }
      })
      // const res = response.json()
      
      // console.log(res);
      
      
      
      //console.log(values);
      
  }

  return (
    <>
      <Button onClick={() => removeProduct(product._id)} >
        Ta bort!
      </Button>
    </>
  );

};


//Sätt nedan i en annan fil sen
// console.log(id);


//Sätt ovan i en annan fil sen


export default BtnRemoveProduct;
