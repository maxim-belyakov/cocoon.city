import React from 'react';

const Cocoons: React.FC = () => {
  return (
    <div>
      {/* Properties Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', color: '#333', marginBottom: '20px' }}>
              Cocoons
            </h2>
            <h3 style={{ fontSize: '24px', color: '#666', marginBottom: '30px' }}>
              Properties
            </h3>
            <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We offer a diverse range of property types, from residences to boutique retreats.
            </p>
          </div>

          {/* Cocoon Place */}
          <div style={{ 
            marginBottom: '80px',
            padding: '40px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px'
          }}>
            <h3 style={{ 
              fontSize: '28px', 
              color: '#FF6B47', 
              textAlign: 'center',
              marginBottom: '30px' 
            }}>
              Welcome to Cocoon Place by Cocoon
            </h3>
            
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 30px',
              color: '#666'
            }}>
              where the city hums not just outside, but also inside, everything is designed to make 
              you breathe. Harmony-driven structure, enough comfort, and peaceful green — all 
              wrapped up in one elegant Cocoon. A place where the rhythm of work and play is the 
              same, and the only thing you need to focus on is feeling at home.
            </p>
            
            <div style={{ 
              textAlign: 'center',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: '#FF6B47'
            }}>
              📍 Poland – Pruszkow
            </div>
          </div>

          {/* Cocoon City */}
          <div style={{ 
            marginBottom: '80px',
            padding: '40px',
            backgroundColor: '#fff',
            border: '2px solid #f0f0f0',
            borderRadius: '12px'
          }}>
            <h3 style={{ 
              fontSize: '28px', 
              color: '#FF6B47', 
              textAlign: 'center',
              marginBottom: '30px' 
            }}>
              Welcome to Cocoon City by Cocoon
            </h3>
            
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 30px',
              color: '#666'
            }}>
              where your stay is as reliable as your favorite coffee and as friendly as a local beer 
              garden. We're all about keeping it practical but with a twist—so you can kick back, stay 
              productive, and soak in all the city perks. Located in the heart of the action, we make 
              sure you're connected, comfy, and ready to roll.
            </p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '30px'
            }}>
              <div style={{ 
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                fontWeight: 'bold',
                color: '#FF6B47'
              }}>
                📍 Poland – Warsaw
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                fontWeight: 'bold',
                color: '#FF6B47'
              }}>
                📍 Portugal – Porto
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                fontWeight: 'bold',
                color: '#FF6B47'
              }}>
                📍 United Kingdom – Scotland – Edinburgh
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                fontWeight: 'bold',
                color: '#FF6B47'
              }}>
                📍 United Arab Emirates – Dubai
              </div>
            </div>
          </div>

          {/* Visual Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '60px'
          }}>
            {[
              { city: 'Warsaw', country: 'Poland', type: 'Place' },
              { city: 'Warsaw', country: 'Poland', type: 'City' },
              { city: 'Porto', country: 'Portugal', type: 'City' },
              { city: 'Edinburgh', country: 'Scotland', type: 'City' },
              { city: 'Dubai', country: 'UAE', type: 'City' }
            ].map((location, index) => (
              <div 
                key={index}
                style={{
                  height: '200px',
                  background: `linear-gradient(135deg, #FF6B47 0%, #FF8A47 100%)`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {location.type}
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>
                  {location.city}
                </h3>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>
                  {location.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cocoons;