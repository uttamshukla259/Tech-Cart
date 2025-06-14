import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";
import { DataCard } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const carouselImages = [
    {
      src: "https://theunitedindian.com/images/gadgets-20-05-24-E-Hero.webp",
      alt: "tech cart Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    {
      src: "https://media.femalemag.com.sg/public/2021/09/Everything-You-Need-To-Know-About-The-New-iPhone-13-iPad-iPad-Mini-and-Watch-7-Feature-Image.jpg",
      alt: "iPhone 16 Pro",
      title: "Introducing iPhone 16 Pro",
      desc: "Explore the newest features in smartphone innovation.",
    },
    {
      src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg",
      alt: "tech-cart Tech Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    {
      src: "https://www.peroz.com.au/cdn/shop/collections/Tech-Gadgets-and-Accessories-PEROZ-Australia.jpg?v=1668927883",
      alt: "tech-cart Tech Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    {
      src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/rockcms/2023-08/AMAZON-TOZO-T10-Bluetooth-53-Wireless-Earbuds-with-Wireless-Charging-Case-IPX8-Waterproof-Stereo-Headphones-in-Ear-Built-in-Mic-Headset-Premium-Sound-with-Deep-Bass-for-Sport-Black-515fd6.jpg",
      alt: "tech cart Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    {
      src: "https://matrixitworld.com/wp-content/uploads/2023/12/smart-watch-sits-smart-watch_843415-1959.jpg",
      alt: "tech cart Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    {
      src: "https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?semt=ais_hybrid&w=740",
      alt: "tech cart Promo",
      title: "Top Tech Deals",
      desc: "Grab your favorite gadgets at the best prices.",
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

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
      

      <div className="carousel-banner">
        <Slider {...sliderSettings}>
          {carouselImages.map((img, index) => (
            <div className="carousel-slide" key={index}>
              <img src={img.src} alt={img.alt} className="carousel-image" />
              <div className="carousel-text">
                <h1>{img.title}</h1>
                <p>{img.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="home-products">
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
