import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import RoomShowcase from '../components/RoomShowcase';
import ApplicationForm from '../components/ApplicationForm';
import { useAppSelector } from '../utils/hooks';

const Home: React.FC = () => {
  const { selectedRoom, startDate } = useAppSelector(state => state.booking);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Show application form if all booking selections are made
  React.useEffect(() => {
    if (selectedRoom && startDate) {
      setShowApplicationForm(true);
      // Scroll to application form
      setTimeout(() => {
        const formElement = document.getElementById('application-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [selectedRoom, startDate]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>COCOON: COLIVING HOMES<br />IN WARSAW</h1>
          <h2 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '30px' }}>
            DISCOVER YOUR COLIVING PLACE<br />
            WHERE CONNECTION, AND WORK-LIFE BALANCE COME NATURALLY
          </h2>
          <BookingForm />
        </div>
      </section>

      {/* Room Showcase Section */}
      <RoomShowcase />

      {/* Application Form Section */}
      {showApplicationForm && (
        <section id="application-form" style={{ padding: '40px 0', background: 'var(--linen)' }}>
          <div className="container">
            <ApplicationForm onClose={() => setShowApplicationForm(false)} />
          </div>
        </section>
      )}

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '40px',
              marginTop: '60px',
              textAlign: 'center',
            }}>
              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>ESSENTIALS</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully furnished houses</li>
                  <li>High-speed Wi-Fi</li>
                  <li>Workspaces in each room</li>
                  <li>Mid to long term rentals</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>COMFORT</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully equipped kitchen</li>
                  <li>Web booking</li>
                  <li>Bills included</li>
                  <li>Swift assistance</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>PAMPER ME</h3>
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