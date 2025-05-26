import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { CartContext } from "./CartContext"; 
import "./Wishlist.css"; 


const Wishlist = () => {
  const { state, dispatch } = useContext(CartContext);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems"));
      if (storedWishlist && storedWishlist.length > 0) {
        dispatch({ type: "SET_WISHLIST", payload: storedWishlist });
      }
    }
  }, [dispatch]);


  useEffect(() => {
    if (state.wishlistItems.length > 0) {
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    }
  }, [state.wishlistItems]);

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist, Your Favorites!"</h2>
      <p>
        Welcome to your personalized Wishlist! 
      </p>
      {state.wishlistItems.length === 0 ? (
        <p>Your Wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {state.wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <Link to={`/product/${item.id}`}>
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />
                <h3>{item.name}</h3>
              </Link>
              <p>Price: ₹{item.price}</p>
              <p>Rating: {item.rating}</p>
              <button
                className="remove-btn"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: { id: item.id },
                  })
                }
              >
                Remove
              </button>
              <button
                className="add-to-cart-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: item.id,
                      name: item.name,
                      rating: item.rating,
                      price: item.price,
                      image: item.image,
                    },
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
