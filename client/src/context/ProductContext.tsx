/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, PropsWithChildren, useState, useEffect } from "react";

import IProduct from "../assets/interfaces/IProduct";

interface IProductContext {
    product: IProduct[];
    test: "",
    updateDatabase: (product: IProduct) => void;
    readFromDatabase: (product: IProduct[]) => void;

}



export const MyProductsContext = createContext<IProductContext>({
    product: [],
    test: "",
    readFromDatabase: () => {},
    updateDatabase: () => {}
});

const ProductProvider = ({ children }: PropsWithChildren<object>) => { //<object> var innan : <{}>
const [products, setProducts] = useState([]);



  const [product] = useState<IProduct[]>([]);

    const readFromDatabase = async () => {
        //Hämta data ifrån databasen. 
        const response = await fetch(`http://localhost:3000/api/products`);
        const data = await response.json();
  
        setProducts(data);
        console.log("data");
        console.log(data);
        return (data)
    }

    const updateDatabase = () => {
        //Uppdatera databasen. 
        //Ska man sätta ett state här? 

        
    }

    useEffect(() => {}, [products]);

    return (
        <MyProductsContext.Provider
            value={{
                product,
                readFromDatabase,
                updateDatabase
            }}
            >
            {children}
        </MyProductsContext.Provider>
    )
}


export default ProductProvider;