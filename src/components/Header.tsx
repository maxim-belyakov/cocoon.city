import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useAppDispatch } from '../utils/hooks';
import { openModal } from '../store/contactSlice';
import { setDatePickerOpen } from '../store/bookingSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleBookNowClick = () => {
    dispatch(setDatePickerOpen(true));
  };

  const handleContactClick = () => {
    dispatch(openModal());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div 
              className="logo"
              style={{
                background: 'linear-gradient(135deg, #FF6B47 0%, #FF8A47 100%)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div style={{
                width: '30px',
                height: '30px',
                border: '2px solid white',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🏠
              </div>
              COCOON
            </div>
          </div>

          <nav>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cocoons">Cocoons</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/invest">Invest with us</Link></li>
              <li><button onClick={handleContactClick} style={{background: 'none', border: 'none', color: '#333', fontWeight: 500, cursor: 'pointer', fontSize: '12px'}}>Contact us</button></li>
              <li><button onClick={handleBookNowClick} className="btn-primary">Book now</button></li>
            </ul>
          </nav>

          <div className="nav-icons">
            <div className="social-icons">
              <Mail size={20} style={{cursor: 'pointer'}} onClick={handleContactClick} />
              <div className="language-switcher">
                <span>PL</span>
                <span>|</span>
                <span className="active">EN</span>
              </div>
              <Facebook size={20} style={{cursor: 'pointer'}} />
              <Instagram size={20} style={{cursor: 'pointer'}} />
              <Linkedin size={20} style={{cursor: 'pointer'}} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;