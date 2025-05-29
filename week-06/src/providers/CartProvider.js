import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const newItem = {
      productId: id,
      count: 1,
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
