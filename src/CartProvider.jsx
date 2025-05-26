import React, { createContext, useReducer, useEffect } from "react";


export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
};


const CartReducer = (state, action) => {
 
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
  }, [state.cartItems, state.totalAmount, state.totalQuantity]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
