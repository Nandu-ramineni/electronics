import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart} from 'react-icons/fa';
import '../styles.css'

const ComponentList = ({ components, addToCart, addToFavorites, showItemDetails}) => {
  return (
    <div className="component-list">
      <h2>Available Items</h2>
      
      <ul>
        {components.map((item) => (
          <li key={item.id} className="component-item">
            <div className="component-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p id='tag'>{item.description}</p>
              <p id='price'>Price: ₹{item.price}</p>
              <p>OfferPrice: ₹{item.offerPrice}</p>
              <div className="buttons">
                <button onClick={() => addToCart(item.id)}><FaCartShopping /></button>
                <button onClick={() => addToFavorites(item.id)}>< FaHeart/></button>
                <button onClick={() => showItemDetails(item)}>Info</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
