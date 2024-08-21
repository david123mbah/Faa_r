import React from 'react';
import './ContactUs.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us for any questions or feedback.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <ul>
            <li>
              <span className="icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="info">
                <a href="tel:+15551234567">+237-654-087-582</a>
              </span>
            </li>
            <li>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="info">
                <a href="mailto:support@example.com">kingadb181@gmail.com</a>
              </span>
            </li>
            <li>
              <span className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="info">
                Messassi, Yaounde, Cameroon
              </span>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;