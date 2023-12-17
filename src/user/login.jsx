import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { FaShoppingBag, FaGift,FaHeart, FaMoneyBill, FaTicketAlt, FaLifeRing } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import '../styles.css';
import { IoMdLogIn } from "react-icons/io";
import { signOut } from 'firebase/auth';

const Login = ({ onLogin, toggleCreateAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const authenticatedUser = userCredential.user;
      localStorage.setItem('username', email); // For simplicity, storing email as username
      onLogin(authenticatedUser);
      setUser(authenticatedUser);
      handleLoginSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      const username = user.displayName || user.email;
      localStorage.setItem("username", username);
      onLogin(user);
      setUser(result.user);
      handleLoginSuccess();
      setTimeout(window.close, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('username');
      setUser(null);
      setLoginSuccess(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`login-form ${user || loginSuccess ? "user-logged-in" : ""}`}
      >
        {user || loginSuccess ? (
          <div className="user-info-modal open">
            <div className="user-info">
              <p>👋Welcome, {localStorage.getItem("username")}!</p>
              <div className="user-section">
                <FaShoppingBag />
                <Link to="/orders">Orders</Link>
              </div>
              <div className="user-section">
                <FaHeart />
                <Link to="/wishlist">Wishlist</Link>
              </div>
              <div className="user-section">
                <FaGift />
                <Link to="/offers">Offers</Link>
              </div>
              <div className="user-section">
                <FaMoneyBill />
                <Link to="/payments">Payments</Link>
              </div>
              <div className="user-section">
                <FaTicketAlt />
                <Link to="/coupons">Coupons</Link>
              </div>
              <div className="user-section">
                <FaLifeRing />
                <Link to="/help-support">Help & Support</Link>
              </div>
              <div className="user-section">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="title">
              <h2>
                <IoMdLogIn />
              </h2>
              <h1>Login</h1>
            </div>
            <input autoComplete='on'
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            <GoogleButton onClick={handleSignInWithGoogle} className="Google" />
            {!user && (
              <p>
                Forgot your password?{" "}
                <span
                  onClick={handleForgotPassword}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Reset it here
                </span>
              </p>
            )}
            <p>
              {user ? "Already logged in." : "Need to Signup? "}
              <span
                onClick={user ? handleLogout : toggleCreateAccount}
                style={{
                  cursor: user ? "default" : "pointer",
                  color: user ? "black" : "blue",
                }}
              >
                {user ? "": "Create Account"}
              </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
