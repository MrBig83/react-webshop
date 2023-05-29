import { PropsWithChildren, createContext, useState } from "react";

interface IProductContext {
  products: string[];
  addProduct: (product: string) => void;
}
export const MyProductsContext = createContext<IProductContext>({
  products: [],
  addProduct: () => {},
});

const MyProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<string[]>(["hej"]);

  const addProduct = (Product: string) => {
    setProducts([...products, Product]);
  };

  return (
    <MyProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </MyProductsContext.Provider>
  );
};

export default MyProductsProvider;
