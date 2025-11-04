import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setDatePickerOpen } from '../store/bookingSlice';
import { rooms } from '../store/bookingSlice';
import PropertyMap from './PropertyMap';

const RoomShowcase: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProperty } = useAppSelector(state => state.booking);

  const handleBookNow = () => {
    dispatch(setDatePickerOpen(true));
  };

  const propertyTitle = 'COCOONS AT COCOON PLACE COLIVING WARSAW – POLAND';

  return (
    <section className="room-showcase">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          marginBottom: '60px',
          alignItems: 'center'
        }}>
          {/* Property Image Placeholder */}
          <div style={{
            flex: 1,
            height: '400px',
            background: 'linear-gradient(135deg, var(--flamingo-pink) 0%, var(--soft-coral) 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Property Images
          </div>
          
          {/* Map */}
          <PropertyMap property={selectedProperty} />
        </div>

        <h2 style={{
          textAlign: 'center',
          fontSize: '32px',
          marginBottom: '40px',
          color: 'var(--flamingo-pink)'
        }}>
          {propertyTitle}
        </h2>

        <div className="room-cards">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-header">
                <h3>{room.name}</h3>
                {room.image && (
                  <div style={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    margin: '15px 0',
                  }}>
                    <img
                      src={room.image}
                      alt={room.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div className="room-card-content">
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '10px',
                  fontSize: '12px',
                  lineHeight: '1.8'
                }}>
                  {room.features.map((feature, index) => (
                    <div key={index} style={{ 
                      paddingBottom: '5px',
                      borderBottom: index < room.features.length - 1 ? '1px solid #eee' : 'none'
                    }}>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="price">
                  Starting from {room.price.toLocaleString()} {room.currency} per month
                </div>
                
                <div style={{ 
                  fontSize: '12px', 
                  color: '#666',
                  marginBottom: '20px'
                }}>
                  Size {room.size}
                </div>
                
                <button 
                  className="btn-primary" 
                  onClick={handleBookNow}
                  style={{ width: '100%' }}
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;