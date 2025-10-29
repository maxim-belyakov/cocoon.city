import React from 'react';
import { useAppDispatch } from '../utils/hooks';
import { openModal } from '../store/contactSlice';

const Invest: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleContactClick = () => {
    dispatch(openModal());
  };

  return (
    <div>
      {/* Main Invest Section */}
      <section className="invest-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', color: '#333', marginBottom: '30px' }}>
              Invest with us
            </h2>
          </div>

          <div className="invest-points">
            <div className="invest-point">
              <h3>Gap to Fill</h3>
              <p>Low number of short-term housing for subject matter experts.</p>
            </div>

            <div className="invest-point">
              <h3>Strong Returns</h3>
              <p>Warsaw rental yields at 6-7% (2024).</p>
            </div>

            <div className="invest-point">
              <h3>Easy, Cost-effective Living</h3>
              <p>One-click, all-in-one services.</p>
            </div>

            <div className="invest-point">
              <h3>Built for Connection</h3>
              <p>Combating loneliness with community-driven spaces.</p>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '60px',
            maxWidth: '800px',
            margin: '60px auto 0'
          }}>
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.8', 
              marginBottom: '30px',
              color: '#666'
            }}>
              Partner with turn-key experts transforming properties into modern, ethical, and 
              sustainable homes. From site selection to management, we handle it all—shaping the 
              future of housing with community at its heart.
            </p>
            
            <p style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#FF6B47',
              marginBottom: '30px'
            }}>
              Just connect.
            </p>

            <button 
              className="btn-primary"
              onClick={handleContactClick}
              style={{ 
                fontSize: '16px',
                padding: '15px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              📱 Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-cities">
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              Warsaw – Dubai – Porto – Edinburgh
            </p>
          </div>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div 
              className="footer-logo"
              style={{
                background: 'linear-gradient(135deg, #FF6B47 0%, #FF8A47 100%)',
                color: 'white',
                padding: '20px 40px',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                opacity: 1
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                🏠
              </div>
              COCOON
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Invest;