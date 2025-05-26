import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer"; 


export const CartContext = createContext();


const initialState = {
  cartItems: [],
  wishlistItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
