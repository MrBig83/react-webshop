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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProduct: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeProduct: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateProductQuantity: () => {},
  ProductIsInCart: () => false,
});
// export const useMyProductsContext = () => useContext(MyProductsContext);

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
      if (p._id === productId) {
        const updatedProduct = {
          ...p,
          quantity: quantity,
        };
        return updatedProduct;
      }
      return p;
    });

    // Filtrera bort objekt med noll kvantitet
    const filteredProducts = updatedProducts.filter((p) => p.quantity > 0);

    setProducts(filteredProducts);

    // Hitta den uppdaterade produkten
    const updatedProduct = filteredProducts.find((p) => p._id === productId);

    // Returnera priset för produkten, om den hittades
    if (updatedProduct) {
      return updatedProduct.price * updatedProduct.quantity;
    }

    return 0; // Om produkten inte hittades, returnera 0 som standardvärde
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
