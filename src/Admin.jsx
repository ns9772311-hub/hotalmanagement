import React from 'react';
import './Admin.css';

function Admin() {
  // Demo data for bookings and restaurant orders
  const bookings = [
    { id: 1, name: 'Rahul Sharma', room: 'Super Luxury Suite', phone: '9876543210', checkin: '2026-10-05', checkout: '2026-10-08' },
    { id: 2, name: 'Priya Verma', room: 'Deluxe Room', phone: '9123456789', checkin: '2026-10-10', checkout: '2026-10-12' }
  ];

  const orders = [
    { id: 1, item: 'Garma-Garm Samosa (2)', price: '₹40', status: 'Preparing' },
    { id: 2, item: 'Cold Mineral Water (1 Litre)', price: '₹20', status: 'Delivered' },
    { id: 3, item: 'Risingh Star Special Thali', price: '₹550', status: 'Completed' }
  ];

  return (
    <div className="admin-container">
      <h2>Hotel Admin Dashboard</h2>
      <p className="admin-subtitle">Welcome Manager! Here is the overview of room bookings and restaurant orders.</p>

      <div className="admin-section">
        <h3>🛏️ Room Bookings</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Room Type</th>
              <th>Phone</th>
              <th>Check-in</th>
              <th>Check-out</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.room}</td>
                <td>{b.phone}</td>
                <td>{b.checkin}</td>
                <td>{b.checkout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-section" style={{ marginTop: '50px' }}>
        <h3>🍽️️ Restaurant Orders</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>#{o.id}</td>
                <td>{o.item}</td>
                <td>{o.price}</td>
                <td><span className="status-badge">{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;