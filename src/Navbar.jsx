import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ query, setQuery }) => {
  const { state } = useContext(CartContext);
  const auth = localStorage.getItem("userData");
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setShowModal(false); // Close the modal
    navigate("/signup");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TechCart
          </Link>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search products..."
              className="navbar-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <button className="navbar-search-btn">Search</button>
          </div>

          <ul className="navbar-icons">
            <li className="navbar-item">
              <Link to="/">
                <FaHome className="navbar-icon" />
                <span className="navbar-text">Home</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/wishlist">
                <FaHeart className="navbar-icon" />
                <span className="navbar-text">Wishlist</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/cart">
                {state.totalQuantity > 0 && (
                  <span className="count">{state.totalQuantity}</span>
                )}
                <FaShoppingCart className="navbar-icon" />
                <span className="navbar-text">Cart</span>
              </Link>
            </li>
            <li className="navbar-item">
              {auth ? (
                <button
                  className="navbar-link logout-btn"
                  onClick={() => setShowModal(true)}
                >
                  <FaSignOutAlt className="navbar-icon" />
                  <span className="navbar-text" id="logout">Logout</span>
                </button>
              ) : (
                <Link to="/signup">
                  <FaSignInAlt className="navbar-icon" />
                  <span className="navbar-text">Login</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h5>Do you want to logout?</h5>
            <p>
              Pressing Yes will log you out and redirect you to the signup page.
            </p>
            <div className="modal-buttons">
              <button className="modal-button confirm" onClick={handleLogout}>
                Yes
              </button>
              <button
                className="modal-button cancel"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
