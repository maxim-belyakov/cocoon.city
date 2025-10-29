import React from 'react';
import { Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Main About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Cocoon Who we are</h2>
            <p>
              Cocoon redefines urban living with curated spaces that balance privacy, connection, 
              and chillaxing.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-info">
              <h3>Paulina Shaw</h3>
              <h4>Founder, trainspotter with ginger head flair.</h4>
              <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                Paulina Shaw's extensive background in hospitality and finance shaped Cocoon's vision. 
                Having worked with industry leaders like Accor, Four Seasons, advised Prince Al 
                Waleed, and collaborated with Dubai and Abu Dhabi governments on strategic 
                alliances, she brings a unique, knowledge-driven approach to addressing housing and 
                hospitality needs. As a Financier, Asset Manager, and Hotelier, her passion influences 
                every design and decision.
              </p>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  color: '#FF6B47',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                <Linkedin size={20} />
                LINKEDIN LINK
              </a>
            </div>
            
            <div style={{ 
              flex: 1,
              height: '300px',
              background: 'linear-gradient(135deg, #FF6B47 0%, #FF8A47 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Founder Photo
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '40px',
            maxWidth: '800px',
            margin: '40px auto 0'
          }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
              Cocoon is relentlessly focused on creating exceptional living. Rooted in hospitality, 
              architecture, facility management and finance, we uncover opportunities at the 
              intersection of real estate, technology, and design, delivering spaces that set a new 
              standard for modern coliving.
            </p>
            <p style={{ 
              fontSize: '18px', 
              fontWeight: 'bold', 
              color: '#FF6B47',
              marginTop: '20px'
            }}>
              Destination – discovered.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="about-section">
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <h3 style={{ color: '#FF6B47', fontSize: '24px', marginBottom: '15px' }}>Our Inspiration</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Cocoon is born to sustainably house small communities.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <h3 style={{ color: '#FF6B47', fontSize: '24px', marginBottom: '15px' }}>Our Name</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Cocoon represents transformation that inspires progress, slow living, and 
                authenticity.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <h3 style={{ color: '#FF6B47', fontSize: '24px', marginBottom: '15px' }}>Our Identity</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Our soft pink, inspired by flamingos, symbolizes life's fleeting beauty, 
                harmony, and friends for life — reminding us to find grace in life's dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three I's Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '60px' }}>
            Our Purpose: 3 I's
          </h2>
          
          <div className="three-is">
            <div className="three-is-item">
              <h3>Inspire</h3>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                As a Cocooner (🏠 + er), I trigger ideas.
              </p>
            </div>
            
            <div className="three-is-item">
              <h3>Inclusive</h3>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                As a Cocooner (🏠 + er), I value empowerment.
              </p>
            </div>
            
            <div className="three-is-item">
              <h3>Innovation</h3>
              <p style={{ fontSize: '16px', fontStyle: 'italic' }}>
                As a Cocooner (🏠 + er), I embrace transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;