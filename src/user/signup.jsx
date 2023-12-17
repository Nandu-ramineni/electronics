import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import "../styles.css";
const Signup = ({ toggleCreateAccount, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Manually send email verification
      await sendEmailVerification(user);
      // Store the username in local storage
      localStorage.setItem("username", username);
      console.log('Registration successful. Please check your email for verification.');
      // Set signup success to true
      setSignupSuccess(true);
      // Call the onLogin function with the user
      onLogin(user, true);
    } catch (error) {
      console.error(error);
    }
  };
  const toggleLogin = () => {
    // Call the toggleCreateAccount function to switch to the login form
    toggleCreateAccount();
  };
  return (
    <div>
      {signupSuccess ? (
        // Display greeting message and username after successful signup
        <div>
          <h1>Signup Successful</h1>
          <p>You have successfully registered, {username}!</p>
          <button onClick={() => onLogin(null, toggleCreateAccount)}>
            Login
          </button>
        </div>
      ) : (
        // Display signup form
        <>
          <h1>Signup Page</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text" placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
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
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <span
              onClick={toggleLogin}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Signup;
