import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_dqxnwde', 'template_aictf9n', e.target, 'ia-QOhpcwXsN3Eu09')
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage(''); 
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('Oops! Something went wrong. Please try again later.');
          setSuccessMessage(''); 
          setTimeout(() => {
            setErrorMessage('');
          }, 5000);
        }
      );
    e.target.reset(); 
  };
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label> <br />
            <input type="text" id="name" name="name" placeholder='Enter Your Name' required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label> <br />
            <input type="email" id="email" name="email" placeholder='Enter Your email' required />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Contact No:</label> <br />
            <input type='tel' name='tel' id='tel' placeholder='Enter Your Contact No' required></input>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label> <br />
            <textarea id="message" name="message" rows="4"placeholder='Enter Your Message' required></textarea>
          </div>
          <button type="submit">Submit</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
