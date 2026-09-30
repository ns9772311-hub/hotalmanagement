import React, { useState } from 'react';
import './Rooms.css';

function Rooms() {
  // Modal state aur selected room ke liye
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState({ name: '', phone: '', checkin: '', checkout: '' });

  const roomsList = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹2,500 / night',
      desc: 'Comfortable bed, AC, Free Wi-Fi, and modern bathroom.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'Super Luxury Suite',
      price: '₹4,500 / night',
      desc: 'King-size bed, private balcony, mini-fridge, and luxury interior.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Family Room',
      price: '₹6,000 / night',
      desc: 'Spacious room with two double beds, best for families.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const handleOpenBooking = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Badhai ho ${bookingData.name}! Aapka ${selectedRoom.name} successfully book ho gaya hai. Humne confirmation SMS ${bookingData.phone} par bhej diya hai.`);
    setShowModal(false);
    setBookingData({ name: '', phone: '', checkin: '', checkout: '' });
  };

  return (
    <div className="rooms-container">
      <h2>Our Luxury Rooms & Suites</h2>
      <p className="rooms-subtitle">Choose the best room for your comfortable stay at Risingh Star.</p>

      <div className="rooms-grid">
        {roomsList.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="price">{room.price}</p>
              <p className="desc">{room.desc}</p>
              <button className="book-now-btn" onClick={() => handleOpenBooking(room)}>
                Book Room
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Popup Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Book {selectedRoom.name}</h3>
            <p className="modal-price">{selectedRoom.price}</p>
            
            <form onSubmit={handleBookingSubmit}>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={bookingData.phone}
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                required 
              />
              <label>Check-in Date:</label>
              <input 
                type="date" 
                value={bookingData.checkin}
                onChange={(e) => setBookingData({...bookingData, checkin: e.target.value})}
                required 
              />
              <label>Check-out Date:</label>
              <input 
                type="date" 
                value={bookingData.checkout}
                onChange={(e) => setBookingData({...bookingData, checkout: e.target.value})}
                required 
              />
              
              <div className="modal-buttons">
                <button type="submit" className="confirm-btn">Confirm Booking</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;