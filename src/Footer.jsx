import React from "react";
import "./Footer.css"; 
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About TechCart</h3>
          <p>
            TechCart is your one-stop solution for all your shopping needs.
            Discover a wide range of products with amazing deals and fast
            delivery!
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@Techcart.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 TechCart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
