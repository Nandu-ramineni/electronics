import React, { useState,useEffect } from 'react';
import './styles.css'
import ComponentFunctions from './components/ComponentFunctions';
import { appliancesData, electronicsData } from './components/ComponentsData';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'
const App = () => {
  const [components] = useState([...electronicsData,...appliancesData,])
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartMessage,setCartMessage]= useState([])
  const addToCart = (componentId) => {
    const existingItem = cart.find((item) => item.id === componentId);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === componentId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      setCartMessage(`Added 1 more ${existingItem.name} to the cart.`);
    } else {
      const componentToAdd = components.find((component) => component.id === componentId);
      setCart([...cart, { ...componentToAdd, quantity: 1 }]);
      setCartMessage(`Added ${componentToAdd.name} to the cart`);
    }
  };
  const addToFavorites = (componentId) => {
    const componentToAdd = components.find((component) => component.id === componentId);
    setFavorites([...favorites, componentToAdd]);
  };
  const increaseQuantity = (componentId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === componentId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const removeCartItem = (componentId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== componentId));
  };
  const removeFavoriteItem = (componentId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== componentId));
  };
  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setCartMessage('');
    }, 2000);
    return () => clearTimeout(messageTimeout);
  }, [cartMessage]);
  return (
    
    <div className="App">
    {cartMessage && <div className="cart-message">{cartMessage}</div>}
    <ComponentFunctions
      components={components}
      cart={cart}
      favorites={favorites}
      addToCart={addToCart}
      addToFavorites={addToFavorites}
      increaseQuantity={increaseQuantity}
      removeCartItem={removeCartItem}
      removeFavoriteItem={removeFavoriteItem}
      setCartMessage={setCartMessage}
    />
    <ContactForm/>
    <Footer />
  </div>
  );
};

export default App;
