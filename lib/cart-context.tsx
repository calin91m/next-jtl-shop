"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (item: {
    productId: number;
    color: string;
    size: string;
  }) => void;
  total: number;
  checkout: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.productId === newItem.productId &&
          item.color === newItem.color &&
          item.size === newItem.size
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === newItem.productId &&
          item.color === newItem.color &&
          item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = ({
    productId,
    color,
    size,
  }: {
    productId: number;
    color: string;
    size: string;
  }) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.color === color &&
            item.size === size
          )
      )
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    alert("Checkout not implemented.");
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeItem, total, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
