import React, { useState } from 'react';
import './Restaurant.css';

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      id: 1,
      category: 'Beverages & Coolers',
      name: 'Cold Mineral Water (1 Litre)',
      price: '₹20',
      desc: 'Chilled packaged drinking water bottle to keep you refreshed.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      category: 'Beverages & Coolers',
      name: 'Chilled Soft Drinks (Cold Drink)',
      price: '₹40',
      desc: 'Refreshing carbonated soft drinks (Thums Up, Coca-Cola, Sprite, or Pepsi).',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      category: 'Beverages & Coolers',
      name: 'Sweet Punjabi Lassi',
      price: '₹60',
      desc: 'Thick, creamy traditional yogurt-based sweet drink topped with malai.',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      category: 'Snacks & Fast Food',
      name: 'Garma-Garm Samosa',
      price: '₹20',
      desc: 'Crispy golden pastry filled with spiced potatoes and peas, served with chutney.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      category: 'Snacks & Fast Food',
      name: 'Khasta Kachori',
      price: '₹30',
      desc: 'Flaky fried bread stuffed with spicy lentil filling, served with tangy tamarind chutney.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      category: 'Snacks & Fast Food',
      name: 'Special Aalubanda',
      price: '₹25',
      desc: 'Spiced mashed potato ball coated in gram flour batter and deep-fried till golden.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      category: 'Sweets & Desserts',
      name: 'Traditional Mithai Assortment',
      price: '₹150 (Plate)',
      desc: 'An exquisite selection of fresh Indian sweets including Gulab Jamun, Jalebi, and Kaju Katli.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      category: 'Starters',
      name: 'Paneer Tikka',
      price: '₹280',
      desc: 'Fresh cottage cheese marinated in rich spices and grilled to perfection.',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      category: 'Main Course',
      name: 'Dal Makhani & Naan',
      price: '₹350',
      desc: 'Creamy black lentils cooked overnight with butter and served with butter naan.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 10,
      category: 'Special Thali',
      name: 'Risingh Star Special Thali',
      price: '₹550',
      desc: 'Complete meal with Paneer, Dal, Mix Veg, Rice, Roti, Raita, and Sweet.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const categories = ['All', 'Snacks & Fast Food', 'Beverages & Coolers', 'Sweets & Desserts', 'Starters', 'Main Course', 'Special Thali'];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleOrder = (itemName) => {
    alert(`Aapne ${itemName} order kar liya hai! Jaldi hi aapka order tayar ho jayega.`);
  };

  return (
    <div className="restaurant-container">
      <h2>Risingh Star Restaurant Menu</h2>
      <p className="restaurant-subtitle">Swad aur shuddhata ka behtareen anubhav — Zayka aisa jo dil jeet le.</p>

      {/* Filter Buttons */}
      <div className="category-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 18px',
              backgroundColor: selectedCategory === cat ? '#ffcc00' : '#1e1e1e',
              color: selectedCategory === cat ? '#121212' : '#fff',
              border: '1px solid #444',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <span className="category-tag">{item.category}</span>
              <h3>{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <p className="menu-desc">{item.desc}</p>
              <button 
                className="order-btn" 
                onClick={() => handleOrder(item.name)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;