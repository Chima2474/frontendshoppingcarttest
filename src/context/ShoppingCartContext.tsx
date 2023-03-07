import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id?: number;
  quantity: number;
  price?: number;
  Img?: string;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => any;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItem: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  function getItemQuantity(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id: number) {
    setCartItem((currItems) => {
      if (currItems?.find((item) => item.id === id) == null) {
        return [...currItems, { id, name, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        removeFromCart,
        cartItem,
        openCart,
        closeCart,
        isOpen,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
