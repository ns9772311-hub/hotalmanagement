import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">We would love to hear from you. Get in touch with Risingh Star!</p>

      <div className="contact-content">
        {/* Hotel Info Box */}
        <div className="contact-info">
          <h3>Hotel Information</h3>
          <p><strong>Address:</strong> Jabalpur, Madhya Pradesh, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@risinghstarhotel.com</p>
          <p><strong>Timing:</strong> Open 24/7 for Stay & Dining</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
          <textarea 
            placeholder="Your Message" 
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;