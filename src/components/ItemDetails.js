// ItemDetails.js

import React from 'react';
import '../styles.css'
const ItemDetails = ({ selectedItem, onClose }) => {
    if (!selectedItem) {
        return null;
    }

    return (
        <div className="item-details-modal">
      <div className="item-details-content">
        <div className="item-details-image">
          <img src={selectedItem.image} alt={selectedItem.name} /> <br />
          <button onClick={onClose}>Close</button>
        </div>
        <div className="item-details-text">
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <p>Category: {selectedItem.category}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {selectedItem.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <p>Price: {selectedItem.price}</p>
          <p>Original Price: ${selectedItem.originalPrice}</p>
          <p>Offer Price: ${selectedItem.offerPrice}</p>
          
        </div>
      </div>
    </div>
    );
};

export default ItemDetails;
