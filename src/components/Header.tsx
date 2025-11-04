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
            <Link to="/">
              <img
                src="/src/assets/COCOON Logo.png"
                alt="COCOON Coliving"
                className="logo"
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>
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
              <Mail size={20} style={{cursor: 'pointer', color: 'var(--deep-taupe)'}} onClick={handleContactClick} />
              <div className="language-switcher">
                <span style={{cursor: 'pointer'}}>PL</span>
                <span>|</span>
                <span className="active" style={{cursor: 'pointer'}}>EN</span>
              </div>
              <a href="https://www.facebook.com/cocooncoliving" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} style={{cursor: 'pointer'}} />
              </a>
              <a href="https://www.instagram.com/cocooncoliving" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} style={{cursor: 'pointer'}} />
              </a>
              <a href="https://www.linkedin.com/in/paulina-shaw" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} style={{cursor: 'pointer'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;