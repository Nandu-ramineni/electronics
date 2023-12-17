// ComponentItem.js

import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ComponentItem = ({ id, name, type, addToCart, addToFavorites }) => {
  const handleAddToCart = () => addToCart(id);
  const handleAddToFavorites = () => addToFavorites(id);

  return (
    <div>
      <p>
        <strong>Name:</strong> {name}, <strong>Type:</strong> {type}
      </p>
      <button onClick={handleAddToCart}>
        <FaShoppingCart />
      </button>
      <button onClick={handleAddToFavorites}>
        <FaHeart />
      </button>
    </div>
  );
};

export default ComponentItem;
