import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart && storedCart.length > 0) {
      dispatch({ type: "SET_CART", payload: storedCart });
    }
  }, [dispatch]);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>"Your Cart, Your Choices!"</h2>
      <p>
        Welcome to your shopping cart!
      </p>
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: { id: item.id, price: item.price },
                    })
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { id: item.id, price: item.price },
                    })
                  }
                >
                  +
                </button>
              </div>
              <p>Total: ₹{item.price * item.quantity}</p>
              <button
                className="remove"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_ENTIRE_ITEM",
                    payload: { id: item.id },
                  })
                }
              >
                Remove Entire Item
              </button>
            </div>
          ))}
          <div className="total-section">
            <h2>Total Amount: ₹{state.totalAmount}</h2>
          </div>
        </div>
      )}

      {state.cartItems.length > 0 && (
        <button className="proceed-button" onClick={handleCheckout}>
          Buy Now
        </button>
      )}
    </div>
  );
};

export default Cart;
