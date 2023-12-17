import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Home = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('username');
      onLogout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="user-info">
          <p>Welcome, {localStorage.getItem('username')}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Home;
