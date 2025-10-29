import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setDatePickerOpen } from '../store/bookingSlice';
import { rooms } from '../store/bookingSlice';

const RoomShowcase: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProperty } = useAppSelector(state => state.booking);

  const handleBookNow = () => {
    dispatch(setDatePickerOpen(true));
  };

  const propertyTitle = selectedProperty 
    ? `OUR ROOMS AT ${selectedProperty.name.toUpperCase()}`
    : 'OUR ROOMS AT COCOON PLACE COLIVING WARSAW – POLAND';

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
            background: 'linear-gradient(135deg, #FF6B47 0%, #FF8A47 100%)',
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
          
          {/* Map Placeholder */}
          <div style={{ 
            flex: 1,
            height: '400px',
            background: '#f0f0f0',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '18px',
            border: '2px solid #ddd'
          }}>
            📍 Map Location
          </div>
        </div>

        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '32px', 
          marginBottom: '40px',
          color: '#FF6B47' 
        }}>
          {propertyTitle}
        </h2>

        <div className="room-cards">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-header">
                <h3>{room.name}</h3>
                <div style={{ 
                  height: '200px', 
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '15px 0',
                  fontSize: '14px'
                }}>
                  HERE IS WHERE WE WILL INSERT<br />
                  PICTURES: 2-3 OF EACH ROOM
                </div>
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