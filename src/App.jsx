import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Rooms from './Rooms';
import Restaurant from './Restaurant';
import Contact from './Contact';
import Gallery from './Gallery';
import Admin from './Admin';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo">⭐ Risingh Star</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms & Suites</Link>
          <Link to="/restaurant">Restaurant</Link>
          <Link to="/gallery">Gallery & Reviews</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/admin" style={{ color: '#ffcc00' }}>Admin Panel</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;