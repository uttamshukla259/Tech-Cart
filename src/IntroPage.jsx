// src/IntroPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css'; // Link to the new CSS file

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      // Check if user is already logged in
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        navigate("/home-dashboard"); // Redirect to the protected home if logged in
      } else {
        navigate("/login"); // Redirect to login if not logged in
      }
    }, 3000); // Adjust delay as needed (e.g., 2000 for 2 seconds)

    // Clear the timeout if the component unmounts before the redirect
    return () => clearTimeout(timer);
  }, [navigate]); // 'navigate' is a dependency for useEffect

  return (
    <div className="intro-page-container">
      <div className="intro-content">
        {/* You can add your TechCart logo here. Make sure 'techcart-logo.png' is in your public folder. */}
        {/* <img src="/techcart-logo.png" alt="TechCart Logo" className="intro-logo" /> */}
        <h1>Welcome to TechCart!</h1>
        <p>Your ultimate destination for the latest tech gadgets.</p>
        {/* Optional: a simple loading spinner */}
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default IntroPage;
