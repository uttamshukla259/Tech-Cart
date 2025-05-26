import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.title, 
          price: product.price,
          image: product.thumbnail, 
        },
      });
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h2>{product.title}</h2>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} ⭐
      </p>
      <button className="bt" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
