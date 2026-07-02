import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../utils/hooks';
import { setDatePickerOpen } from '../store/bookingSlice';
import { rooms } from '../store/bookingSlice';

const RoomShowcase: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleBookNow = () => {
    dispatch(setDatePickerOpen(true));
  };

  const propertyTitle = 'COCOONS AT COCOON PLACE COLIVING WARSAW – POLAND';

  return (
    <section className="room-showcase">
      <div className="container">
        

        <h2 style={{
          textAlign: 'center',
          fontSize: '32px',
          marginBottom: '40px',
          color: 'var(--flamingo-pink)'
        }}>
          {propertyTitle}
        </h2>

        <div className="room-cards">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
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
                  {t('perMonth', { price: room.price.toLocaleString(), currency: room.currency })}
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
                  {t('nav.reserve')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;