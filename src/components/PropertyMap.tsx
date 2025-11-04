import React from 'react';
import { Property } from '../types';
import { propertyLocations } from '../data/properties';

interface PropertyMapProps {
  property?: Property;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ property }) => {
  if (!property) {
    return (
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
        📍 Select a property to view location
      </div>
    );
  }

  const mapUrl = propertyLocations[property.id];

  // Extract coordinates from Google Maps URL or use iframe embed
  // For now, we'll use a simple link-based approach
  return (
    <div style={{
      flex: 1,
      height: '400px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '2px solid var(--sage-green)'
    }}>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--sage-green) 0%, var(--linen) 100%)',
          textDecoration: 'none',
          color: 'var(--deep-taupe)',
          fontSize: '18px',
          fontWeight: 'bold',
          flexDirection: 'column',
          gap: '10px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{ fontSize: '48px' }}>📍</div>
        <div>{property.name}</div>
        <div style={{ fontSize: '14px', fontWeight: 'normal' }}>
          {property.city}, {property.country}
        </div>
        <div style={{
          fontSize: '12px',
          padding: '8px 16px',
          background: 'var(--flamingo-pink)',
          color: 'white',
          borderRadius: '4px',
          marginTop: '10px'
        }}>
          View on Google Maps →
        </div>
      </a>
    </div>
  );
};

export default PropertyMap;
