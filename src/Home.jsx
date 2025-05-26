import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; 
import { DataCard } from "./Data";
import "./Home.css";

const Home = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="skeleton-container">
        <h2>
          <Skeleton width={200} />
        </h2>
        <div className="products-skeleton">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div className="skeleton-card" key={index}>
                <Skeleton height={150} />
                <Skeleton width={`80%`} style={{ marginTop: "8px" }} />
                <Skeleton width={`60%`} />
                <Skeleton width={`40%`} style={{ marginTop: "8px" }} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      <h1>Welcome to TechCart</h1>
      <p>Your one-stop shop for all your favorite tech products.</p>

      <header className="home-header">
        <div className="banner">
          <div className="banner-overlay">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80"
              alt="iPhone 16 Pro"
              className="banner-image"
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg"
              alt="iPhone 16 Pro"
              className="banner-image"
            />
            <div className="banner-text">
              <h1 className="iphone">Introducing iPhone 16 Pro</h1>
              <p>Explore the newest features in smartphone innovation.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="home-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          {products.length > 0 ? (
            products
              .filter(
                (product) =>
                  product.title.toLowerCase().includes(query) ||
                  product.brand.toLowerCase().includes(query)
              )
              .map((product) => (
                <DataCard
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                  image={product.thumbnail}
                  rating={product.rating}
                />
              ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
