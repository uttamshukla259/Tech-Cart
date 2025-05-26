import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"; // Make sure this CSS file exists and contains the split layout styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate(""); // This should probably be navigate("/") or navigate to a specific dashboard
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.email === email && userData.password === password) {
      // IMPORTANT: DO NOT use alert(). Use a custom modal or message box.
      // alert("Login successful!");

      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      navigate("/"); // Redirect to the home page
    } else {
      // IMPORTANT: DO NOT use alert(). Use a custom modal or message box.
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-split-page">
      <div className="left-side">
        <div className="site-info">
          <h1>Welcome to TechCart!</h1>
          <p className="tagline">Your ultimate destination for the latest tech gadgets.</p>
          <blockquote className="quote">
            "The only way to do great work is to love what you do." - Steve Jobs
          </blockquote>
        </div>
        <div className="image-container">
          {/* Corrected: Reference image directly from public folder */}
          <img src="/login12.jpg" alt="Tech Gadgets" className="tech-image" />
        </div>
      </div>
      <div className="right-side">
        <div className="auth-container">
          <h2 className="auth-title">Login</h2>
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          <div className="auth-switch">
            Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;