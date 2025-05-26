import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"; 
 import "./Home.css";

export const Data = [
  // {
  //   id: "1",
  //   name: "vivo T3 Pro 5G (Sandstone Orange, 128 GB)",
  //   price: 24999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/s/h/-original-imah44jedp88tjqn.jpeg?q=70",
  //   rating: 4.5,
  // },
  // {
  //   id: "2", // Corrected id
  //   name: "Google Pixel 9 (Obsidian, 256 GB)",
  //   price: 79999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/r/w/pixel-9-ga05842-in-google-original-imah3pfhxtjf5t8q.jpeg?q=70",
  //   rating: 4.0,
  // },
  // {
  //   id: "3", // Corrected id
  //   name: "vivo T3 Pro 5G (Sandstone Orange, 128 GB)",
  //   price: 26999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/s/h/-original-imah44jedp88tjqn.jpeg?q=70",
  //   rating: 4.5,
  // },
  // {
  //   id: "4", // Corrected id
  //   name: "Google Pixel 7 (snow, 128 GB)",
  //   price: 32999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70",
  //   rating: 4.4,
  // },
  // {
  //   id: "5", // Corrected id
  //   name: "vivo T3 Pro 5G (Sandstone Orange, 128 GB)",
  //   price: 24999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/s/h/-original-imah44jedp88tjqn.jpeg?q=70",
  //   rating: 4.5,
  // },
  // {
  //   id: "6", // Corrected id
  //   name: "Samsung Galaxy S23 FE (Graphite, 128 GB)",
  //   price: 24999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=70",
  //   rating: 4.5,
  // },
  // {
  //   id: "7", // Corrected id
  //   name: "Samsung Galaxy S21 FE 5G with Snapdragon 888 (Graphite, 256 GB)",
  //   price: 24999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/a/l/galaxy-s21-fe-5g-sm-g990bza4ins-samsung-original-imah3gndw9qvwxn4.jpeg?q=70",
  //   rating: 4.5,
  // },
  // {
  //   id: "8", // Corrected id
  //   name: "Apple iPhone 15 Plus (blue, 128 GB)",
  //   price: 75999,
  //   image:
  //     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
  //   rating: 4.6,
  // },
];

export const DataCard = ({ id, name, price, image, rating, brand, category }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, image }, 
    });
  };

  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { id, name, price, image },
    });
  };

  return (
    <div className="card">
      <Link to={`/product/${id}`} className="cardLink">
        <img className="img" src={image} alt={name} />
        <h4 className="cardBrand">{brand}</h4>
        <h2 className="cardName">{name}</h2>
        <p className="cardPrice">₹{price}</p>
        {/* <h4 className="cardCategory">{category}</h4> */}
        <p className="cardRating">Rating: {rating} ⭐</p>
      </Link>
      <button className="bt" onClick={addToWishlist}>
        Wishlist
      </button>
      <button className="bt" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};
