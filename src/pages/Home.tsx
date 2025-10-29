import React from 'react';
import BookingForm from '../components/BookingForm';
import RoomShowcase from '../components/RoomShowcase';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Cocoon – Your Everyday Escape</h1>
          <BookingForm />
        </div>
      </section>

      {/* Room Showcase Section */}
      <RoomShowcase />

      {/* What's In Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>DISCOVER YOUR COLIVING PLACE</h2>
            <h3 style={{ fontSize: '20px', marginBottom: '30px', color: '#666' }}>
              WHERE CONNECTION, AND WORK-LIFE BALANCE COME NATURALLY
            </h3>
            <p>
              Since 2003, we've been turning spaces into shared homes for remote workers, 
              creatives, and young professionals on the move. Private rooms. Shared energy. Flexible 
              leases. Ultra-fast Wi-Fi. Whether you're Zooming at 9 or brainstorming at midnight — 
              Cocoon is your base, your vibe, your community.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '40px', 
              marginTop: '60px',
              textAlign: 'left'
            }}>
              <div>
                <h3 style={{ color: '#FF6B47', marginBottom: '20px' }}>ESSENTIALS</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully furnished houses</li>
                  <li>High-speed Wi-Fi</li>
                  <li>Workspaces in each room</li>
                  <li>Mid to long term rentals</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: '#FF6B47', marginBottom: '20px' }}>COMFORT</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully equipped kitchen</li>
                  <li>Web booking</li>
                  <li>Bills included</li>
                  <li>Swift assistance</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: '#FF6B47', marginBottom: '20px' }}>PAMPER ME</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Airport transportation</li>
                  <li>Chauffeur</li>
                  <li>Cook</li>
                  <li>Spa discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;