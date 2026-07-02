import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../utils/hooks';
import { openModal } from '../store/contactSlice';
import { setDatePickerOpen } from '../store/bookingSlice';
import type { Language } from '../i18n';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const handleBookNowClick = () => {
    dispatch(setDatePickerOpen(true));
  };

  const handleContactClick = () => {
    dispatch(openModal());
  };

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <Link to="/">
              <img
                src="/assets/cocoon-logo.png"
                alt="COCOON Coliving"
                className="logo"
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>
          </div>

          <nav>
            <ul className="nav">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/cocoons">{t('nav.cocoons')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/invest">{t('nav.invest')}</Link></li>
              <li><button onClick={handleContactClick} style={{background: 'none', border: 'none', color: '#333', fontWeight: 500, cursor: 'pointer', fontSize: '12px'}}>{t('nav.contact')}</button></li>
              <li><button onClick={handleBookNowClick} className="btn-primary">{t('nav.reserve')}</button></li>
            </ul>
          </nav>

          <div className="nav-icons">
            <div className="social-icons">
              <Mail size={20} style={{cursor: 'pointer', color: 'var(--deep-taupe)'}} onClick={handleContactClick} />
              <div className="language-switcher" role="group" aria-label="Language switcher">
                <span
                  className={i18n.resolvedLanguage === 'pl' ? 'active' : ''}
                  style={{ cursor: 'pointer' }}
                  onClick={() => changeLanguage('pl')}
                >
                  PL
                </span>
                <span>|</span>
                <span
                  className={i18n.resolvedLanguage === 'en' ? 'active' : ''}
                  style={{ cursor: 'pointer' }}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </span>
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
