import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaTrash, FaTimes, FaSearch,FaUser } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { TbSunElectricity } from "react-icons/tb";
import { FaBarsStaggered } from "react-icons/fa6";
import ComponentList from './ComponentList';
import ItemDetails from './ItemDetails';
import ExcitingCrashCoursesCarousel from './Coursel';
import About from './About'
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import '../styles.css'
import PaymentPage from './Paymentpage';
import Login from '../user/login'
import Signup from '../user/signup'

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
const ComponentFunctions = ({
  components,
  cart,
  favorites,
  addToCart,
  addToFavorites,
  increaseQuantity,
  removeCartItem,
  removeFavoriteItem,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [showOrderPlaced, setShowOrderPlaced] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isFavoritesOpen) {
      setIsFavoritesOpen(false);
    }
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    if (isLoginFormOpen){
      setIsLoginFormOpen(false)
    }
    
  };
  const toggleFavorites = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
    if (isCartOpen) {
      setIsCartOpen(false);
    }
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };
  const toggleSearch = () => {
    setSearchTerm('');
    setIsSearchOpen(!isSearchOpen);
    if (isCartOpen) {
      setIsCartOpen(false);
    }
    if (isFavoritesOpen) {
      setIsFavoritesOpen(false);
    }
    if (isLoginFormOpen){
      setIsLoginFormOpen(false)
    }
  };
  const showItemDetails = (item) => {
    setSelectedItem(item);
    setIsSearchOpen(false);
  };
  const closeItemDetails = () => {
    setSelectedItem(null);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const gstAmount = 0.02 * calculateTotalPrice(cart);
  const filteredComponents = components.filter(
    (component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const scrollToAbout = () => {
    scroller.scrollTo('about-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredComponents.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(filteredComponents.length / itemsPerPage);
  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <span
        key={i}
        className={`pagination-link ${currentPage === i ? 'active' : ''}`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </span>
    );
  }
  const handleOrderPlaced = () => {
    setShowPaymentPage(false);
    setShowOrderPlaced(true);
    setShowPaymentPage(true);
    setTimeout(() => {
      setShowOrderPlaced(false);
    }, 5000);
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
    if (cart.length > 0) {
      setShowPaymentPage(true);
    } else {
      console.log('Cannot proceed. Cart is empty.');
    }
  };
  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser);
  };



  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
    setIsSignupFormOpen(false);
  };

  const toggleSignupForm = () => {
    setIsSignupFormOpen(!isSignupFormOpen);
    setIsLoginFormOpen(false);
  };
  
  return (
    <div>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''} ${scrollPosition > 100 ? 'fixed-nav' : ''}`}>
        <div className="logo">
          <div className='image'>
            <h1><TbSunElectricity /></h1>
          </div>
          <div className='text'>
            <h1>Tech craft</h1>
            <p>Your Tech, Your Way</p>
          </div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <ScrollLink to="home-section" smooth={true} duration={800}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="shop-section" smooth={true} duration={800}>Shop</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about-section" smooth={true} duration={800} onClick={scrollToAbout}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact-section" smooth={true} duration={800}>Contact</ScrollLink>
          </li>
        </ul>
        <div className="icons">
          <button className="icon-button" id="search" onClick={toggleSearch}>
            <FaSearch />
          </button>
          <button className="icon-button" onClick={toggleFavorites}>
            <FaHeart />
            {isFavoritesOpen}
          </button>
          <button className="icon-button" onClick={toggleCart}>
            <FaCartShopping />
            {totalCartItems > 0 && <span className="badge">{totalCartItems}</span>}
          </button>
          <button className="icon-button" id='user' onClick={toggleLoginForm}>
            <FaUser />
          </button>
          <button className="icon-button" id='bars' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
          </button>
        </div>
      </nav>
      {selectedItem && (
        <ItemDetails selectedItem={selectedItem} onClose={closeItemDetails} />
      )}
      {isLoginFormOpen &&  (
        <div className="login-modal open">
          <Login toggleCreateAccount={toggleSignupForm} onLogin={handleLogin} />
        </div>
      )}
      {isSignupFormOpen && (
        <div className="signup-modal open">
          <Signup toggleCreateAccount={toggleLoginForm}  onSignup={toggleLoginForm} />
        </div>
      )}
      {isSearchOpen && (
        <div className="search-modal open">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="close-icon" onClick={toggleSearch}>
            <FaTimes />
          </button>
          <div className="search-results">
            {filteredComponents.map((result) => (
              <div key={result.id} onClick={() => showItemDetails(result)}>
                <div className="item-box">
                  <img src={result.image} alt={result.name} />
                  <h3>{result.name}</h3>
                  <p>{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isCartOpen && (
        <div className="cart-modal open">
          <div className='cart-title'>
            <h2>
              <FaShoppingCart /> Cart
            </h2>
            <button className="close-icon" onClick={() => setIsCartOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className='cart'>
                  <div className='cart-image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='cart-content'>
                    <div className="quantity-dropdown">
                      {item.name} <br /> ₹{item.price} x
                      <label htmlFor={`quantity-${item.id}`}> Qty:</label>
                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity || 1}
                        onChange={(e) => increaseQuantity(item.id, parseInt(e.target.value, 10))}
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                      <button onClick={() => removeCartItem(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-summary">
            <div className="summary-item">
              <p>Subtotal:</p>
              <p>GST (2%):</p>
              <p>Processing Fee:</p>
              <p>Total Price:</p>
            </div>
            <div className="cost-item">
              <p>₹{calculateTotalPrice(cart).toFixed(2)}</p>
              <p>₹{gstAmount.toFixed(2)}</p>
              <p>₹99</p>
              <p>₹{(calculateTotalPrice(cart) + gstAmount + 99).toFixed(2)}</p>
            </div>
          </div>
          <button className='buy-now' onClick={handleBuyNow}>Place Order {">>"}</button>
          {showPaymentPage && (
            <PaymentPage onClose={() => setShowPaymentPage(false)} onOrderPlaced={handleOrderPlaced} />
          )}
          {showOrderPlaced && (
            <div className="order-placed-message">
              <p>Your order has been placed successfully!</p>
            </div>
          )}
        </div>
      )}
      {isFavoritesOpen && (
        <div className="favorites-modal open">
          <div className='cart-title'>
            <h2>
              <FaHeart /> Favorites
            </h2>
            <button className="close-icon" onClick={() => setIsFavoritesOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <ul>
            {favorites.map((item) => (
              <li key={item.id}>
                <div className="favorite-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">
                      <span className="original-price">${item.originalPrice}</span>
                      <span className="offer-price">${item.offerPrice}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFavoriteItem(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Element name="home-section">
        <ExcitingCrashCoursesCarousel />
      </Element>
      <div className="pagination">{paginationLinks}</div>
      <Element name="shop-section">
        <ComponentList
          components={currentItems}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
          showItemDetails={showItemDetails}
        />
      </Element>
      <div className="pagination">{paginationLinks}</div>
      <Element name="about-section">
        <About />
      </Element>
      
      {/*<BlogsAndReviews />
      {/*<Routes>
        <Route path="/" element={""} />
        <Route path="/about" element={<About />} />
            </Routes> */}
    </div>
  );
};

export default ComponentFunctions;
