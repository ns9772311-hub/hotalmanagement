import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Check-in aur Check-out ka samay kya hai?',
      a: 'Check-in 12:00 PM aur Check-out 11:00 AM hai[cite: 8].'
    },
    {
      q: 'Kya room service 24 ghante milti hai?',
      a: 'Haan, hamari room service aur restaurant 24/7 khula rehta hai[cite: 8].'
    },
    {
      q: 'Kya parking ki suvidha uplabdh hai?',
      a: 'Ji haan, secure and free parking available hai[cite: 8].'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Welcome to Risingh Star Restaurant and Hotel</h1>
          <p>Experience luxury stay, delicious food, and world-class hospitality.</p>
          <button className="book-btn" onClick={() => navigate('/rooms')}>
            Book Your Stay
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Aaram aur Zayke ka Behtareen Sangam</h2>
        <p>
          Chahe aapko ek shandar room mein rukhna ho ya lazeez khana (Samosa, Kachori, Mithai aur Special Thali) khana ho, 
          Risingh Star aapke liye sabse behtareen jagah hai.
        </p>
      </section>

      {/* Features / Facilities Section */}
      <section className="features-section">
        <h2>Our Special Facilities</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🛏️ Luxury Rooms</h3>
            <p>Spacious and well-decorated rooms with modern amenities for your comfort.</p>
          </div>
          <div className="feature-card">
            <h3>🍽️ Pure & Delicious Food</h3>
            <p>Enjoy fresh snacks, traditional sweets, and full meals at our restaurant.</p>
          </div>
          <div className="feature-card">
            <h3>📶 24/7 Service</h3>
            <p>Round-the-clock room service and friendly staff to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', color: '#ffcc00', fontSize: '35px', marginBottom: '40px' }}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} style={{ background: '#1e1e1e', marginBottom: '15px', borderRadius: '8px', border: '1px solid #333', overflow: 'hidden' }}>
            <div 
              onClick={() => toggleFaq(index)} 
              style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontWeight: 'bold' }}
            >
              <span>{faq.q}</span>
              <span style={{ color: '#ffcc00' }}>{openFaq === index ? '-' : '+'}</span>
            </div>
            {openFaq === index && (
              <div style={{ padding: '0 20px 20px 20px', color: '#bbb', fontSize: '15px', lineHeight: '1.5' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;