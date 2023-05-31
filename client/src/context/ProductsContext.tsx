import { PropsWithChildren, createContext, useContext, useState } from "react";
import IProduct from "../assets/interfaces/Interfaces";

interface IProductContext {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  ProductIsInCart: (productId: string) => boolean;
}

export const MyProductsContext = createContext<IProductContext>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  updateProductQuantity: () => {}, // Lägg till den nya funktionen med en tom implementation
  ProductIsInCart: () => false,
});
export const useMyProductsContext = () => useContext(MyProductsContext);

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

  const updateProductQuantity = (productId: string, quantity: number) => {
    const updatedProducts = products.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          quantity: quantity,
        };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  return (
    <MyProductsContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        ProductIsInCart,
        updateProductQuantity,
      }}
    >
      {children}
    </MyProductsContext.Provider>
  );
};

export default MyProductsProvider;
