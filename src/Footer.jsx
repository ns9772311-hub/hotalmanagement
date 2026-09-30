import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>⭐ Risingh Star</h3>
          <p>Experience luxury stay, delicious food, and world-class hospitality in Jabalpur.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/rooms">Rooms & Suites</a>
          <a href="/restaurant">Restaurant</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Jabalpur, Madhya Pradesh</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@risinghstar.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Risingh Star Hotel & Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;