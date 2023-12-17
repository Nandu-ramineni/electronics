// UserAuthForm.jsx

import React, { useState } from 'react';
import { auth } from './firebase';

const UserAuthForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      onClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      onClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="user-auth-form">
      <h2>User Authentication</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default UserAuthForm;
