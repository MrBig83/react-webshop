import { useState, useEffect, createContext, PropsWithChildren } from "react";
import IProduct from "../assets/interfaces/IProduct";

interface ProductContextProps {
  products: IProduct[] | null;
  getProducts: () => Promise<void>;
  updateProduct: (values: IProduct, id: string) => Promise<void>;
  addProduct: (values: IProduct) => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps>(null as any);

const ProductContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`/api/products`);
    const products = await res.json();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  async function updateProduct(values: IProduct, id: string) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const res = response.json();
    getProducts();
  }

  async function addProduct(values: IProduct) {
    const response = await fetch(`/api/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const res = response.json();

    getProducts();
  }

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        products,
        updateProduct,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
