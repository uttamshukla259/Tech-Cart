import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"; // Make sure this CSS file exists and contains the split layout styles

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful!");
    navigate("/login");
  };

  useEffect(() => {
    const auth = localStorage.getItem("userData");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="auth-split-page">
      <div className="left-side">
        <div className="site-info">
          <h1>Join the TechCart Community!</h1>
          <p className="tagline">Discover a world of innovative technology.</p>
          <blockquote className="quote">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </blockquote>
        </div>
       
      </div>
      <div className="right-side">
        <div className="auth-container">
          <h2 className="auth-title">Create Account</h2>
          <form className="auth-form" onSubmit={handleSignup}>
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
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="auth-input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
          <div className="auth-switch">
            Already have an account? <Link to="/login" className="auth-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;