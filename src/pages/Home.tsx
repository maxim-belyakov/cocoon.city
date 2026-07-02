import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookingForm from '../components/BookingForm';
import RoomShowcase from '../components/RoomShowcase';
import ApplicationForm from '../components/ApplicationForm';
import { useAppSelector } from '../utils/hooks';

const Home: React.FC = () => {
  const { t } = useTranslation();
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>{t('hero.title')}</h1>
            <h2 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '30px' }}>
              {t('hero.subtitle')}
            </h2>
            <BookingForm />
          </motion.div>
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
            <h2>{t('discover.title')}</h2>
            <h3 style={{ fontSize: '20px', marginBottom: '30px', color: '#666' }}>
              {t('discover.subtitle')}
            </h3>
            <p>{t('discover.body')}</p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '40px',
              marginTop: '60px',
              textAlign: 'center',
            }}>
              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>{t('discover.essentials')}</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully furnished houses</li>
                  <li>High-speed Wi-Fi</li>
                  <li>Workspaces in each room</li>
                  <li>Mid to long term rentals</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>{t('discover.comfort')}</h3>
                <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                  <li>Fully equipped kitchen</li>
                  <li>Web booking</li>
                  <li>Bills included</li>
                  <li>Swift assistance</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: 'var(--flamingo-pink)', marginBottom: '20px' }}>{t('discover.pamper')}</h3>
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
