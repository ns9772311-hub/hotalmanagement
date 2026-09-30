import React from 'react';
import './Gallery.css';

function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Luxury Hotel Exterior', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Super Luxury Suite', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Swimming Pool Area', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Garma-Garm Samosa & Kachori', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Traditional Sweets (Mithai)', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Restaurant Dining', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' }
  ];

  const reviews = [
    { id: 1, name: 'Rahul Sharma', review: 'Risingh Star ka khana aur khaaskar Samosa-Kachori ekdum lazeez tha! Rooms bhi bohot saaf aur luxury the.' },
    { id: 2, name: 'Priya Verma', review: 'Best hospitality in town! Swimming pool aur restaurant ka mahol bohot hi shandar hai.' },
    { id: 3, name: 'Amit Singh', review: 'Very comfortable stay. Staff ka behavior bahut accha hai. Highly recommended!' }
  ];

  return (
    <div className="gallery-container">
      <h2>Hotel Photo Gallery</h2>
      <p className="gallery-subtitle">A glimpse of luxury, comfort, and delicious food at Risingh Star.</p>

      {/* Gallery Grid */}
      <div className="photo-grid">
        {galleryImages.map((item) => (
          <div className="photo-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="photo-title">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Customer Reviews Section */}
      <h2 className="reviews-heading">What Our Guests Say</h2>
      <div className="reviews-grid">
        {reviews.map((rev) => (
          <div className="review-card" key={rev.id}>
            <p className="review-text">"{rev.review}"</p>
            <h4 className="review-author">- {rev.name}</h4>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;