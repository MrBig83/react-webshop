import { createContext, PropsWithChildren, useEffect, useState } from "react";
import IProduct from "../assets/interfaces/IProduct";
import { ICartItem } from "../assets/interfaces/ICartItem";

interface CartContext {
  items: ICartItem[];
  product: IProduct[];
  shopingcartTotal: number;
  addItem: (item: ICartItem) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  itemIsInCart: (itemId: string) => boolean;
  addProduct: (product: IProduct) => void;
  removeItem: (itemId: string) => void;
  removeProduct: (productId: string) => void;
  productIsInCart: (productId: string) => boolean;
  calculateTotal: () => number;
  emptyCart: () => void;
}

export const MyCartContext = createContext<CartContext>({
  items: [],
  product: [],
  shopingcartTotal: 0,
  addItem: () => {},
  updateItemQuantity: () => {},
  itemIsInCart: () => false,
  addProduct: () => {},
  removeItem: () => {},
  removeProduct: () => {},
  productIsInCart: () => false,
  calculateTotal: () => {},
  emptyCart: () => [],
});

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [items, setItems] = useState<ICartItem[]>(cartFromLocalStorage);
  const [product] = useState<IProduct[]>([]);
  const [shopingcartTotal, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.product?._id !== itemId);
    setItems(newItems);
  };

  const addItem = (item: ICartItem) => {
    setItems([...items, item]);
  };

  const itemIsInCart = (itemId: string) => {
    return items.some((item) => item.product?._id === itemId);
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    const updatedItems = items.map((item) => {
      if (item.product?._id === itemId) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });

    const filteredItems = updatedItems.filter((item) => item.quantity > 0);
    setItems(filteredItems);

    const updatedItem = filteredItems.find(
      (item) => item.product?._id === itemId
    );

    if (updatedItem) {
      return updatedItem.product?.price * updatedItem.quantity;
    }

    return 0;
  };

  const addProduct = (product: IProduct) => {
    const item: ICartItem = {
      product: product,
      quantity: 1,
    };
    addItem(item);
  };

  const removeProduct = (productId: string) => {
    const newItems = items.filter((item) => item.product?._id !== productId);
    setItems(newItems);
  };
  const productIsInCart = (productId: string) => {
    return items.some((item) => item.product?._id === productId);
  };

  const calculateTotal = () => {
    let calculatedTotal = 0;

    items.forEach((item) => {
      if (
        typeof item.product?.price === "number" &&
        typeof item.quantity === "number" &&
        !isNaN(item.product?.price) &&
        !isNaN(item.quantity)
      ) {
        calculatedTotal += item.product?.price * item.quantity;
      }
    });
    useEffect(() => {
      setTotal(calculatedTotal);
    }, [calculateTotal]);
    return shopingcartTotal;
  };

  const emptyCart = () => {
    setItems([]);
  };

  return (
    <MyCartContext.Provider
      value={{
        items,
        product,
        shopingcartTotal,
        addItem,
        updateItemQuantity,
        itemIsInCart,
        addProduct,
        removeItem,
        removeProduct,
        productIsInCart,
        calculateTotal,
        emptyCart,
      }}
    >
      {children}
    </MyCartContext.Provider>
  );
};

export default CartProvider;
