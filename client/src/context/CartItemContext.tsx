import { PropsWithChildren, createContext, useState } from "react";
import { ICartItem } from "../assets/interfaces/icartitem";


interface ICartItemContext {
    items: ICartItem[];
    addItem: (item: ICartItem) => void;
    removeItem: (itemId: string) => void;
    ItemIsInCart: (itemId: string) => boolean;
    // onQuantityChange: (productId: string, quantity: number) => void;
    // onRemove: (productId: string) => void;
  }

  
  export const MyCartItemContext = createContext<ICartItemContext>({
    items: [],
   addItem: () => {},
    removeItem: () => {},
    ItemIsInCart: () => false,
    // onQuantityChange: () => {},
//   onRemove: () => {},
  });

  const MyCartItemProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<ICartItem[]>([]);
  
  const addItem = (item: ICartItem) => {
    setItems((previtems)=> [...previtems, item]);
  };




  const removeItem = (itemId: string) => {
    const newItemList = items.filter((i) => i.product._id !== itemId);
    setItems(newItemList);
  };

  const ItemIsInCart = (itemId: string) => {
    return items.some((i) => i.product._id === itemId);
  };
  
  return (
    <MyCartItemContext.Provider
      value={{ items, addItem, removeItem, ItemIsInCart}}
    >
      {children}
    </MyCartItemContext.Provider>
  );
};

export default MyCartItemProvider;
  

