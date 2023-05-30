import { PropsWithChildren, createContext, useState } from "react";
import IProduct from "../assets/interfaces/Interfaces";

interface IProductContext {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: string) => void;
  ProductIsInCart: (productId: string) => boolean;
}

export const MyProductsContext = createContext<IProductContext>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  ProductIsInCart: () => false,
});

const MyProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const removeProduct = (productId: string) => {
    const newProductList = products.filter((p) => p._id !== productId);
    setProducts(newProductList);
  };

  const addProduct = (Product: IProduct) => {
    setProducts([...products, Product]);
  };

  const ProductIsInCart = (productId: string) => {
    return products.some((p) => p._id === productId);
  };

  return (
    <MyProductsContext.Provider
      value={{ products, addProduct, removeProduct, ProductIsInCart }}
    >
      {children}
    </MyProductsContext.Provider>
  );
};

export default MyProductsProvider;
