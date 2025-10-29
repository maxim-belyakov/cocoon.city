import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { 
  setSelectedProperty, 
  setSelectedRoom, 
  setAdults, 
  setBookingPeriod,
  setDatePickerOpen,
  properties, 
  rooms 
} from '../store/bookingSlice';

const BookingForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { 
    selectedProperty, 
    selectedRoom, 
    adults, 
    bookingPeriod, 
    startDate 
  } = useAppSelector(state => state.booking);

  const handlePropertyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const property = properties.find(p => p.id === e.target.value);
    if (property) {
      dispatch(setSelectedProperty(property));
    }
  };

  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const room = rooms.find(r => r.id === e.target.value);
    if (room) {
      dispatch(setSelectedRoom(room));
    }
  };

  const handleAdultsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAdults(parseInt(e.target.value)));
  };

  const handleBookingPeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBookingPeriod(parseInt(e.target.value) as 1 | 6 | 12));
  };

  const handleDateClick = () => {
    dispatch(setDatePickerOpen(true));
  };

  const handleBookNow = () => {
    // For now, just open the date picker
    dispatch(setDatePickerOpen(true));
  };

  return (
    <div className="booking-form">
      <div className="form-row">
        <div className="form-group">
          <label>Cocoon</label>
          <select 
            value={selectedProperty?.id || ''} 
            onChange={handlePropertyChange}
          >
            <option value="">Select a Cocoon</option>
            {properties.map(property => (
              <option key={property.id} value={property.id}>
                {property.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Room</label>
          <select 
            value={selectedRoom?.id || ''} 
            onChange={handleRoomChange}
          >
            <option value="">Select a Room</option>
            {rooms.map(room => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Cocooners</label>
          <select 
            value={adults} 
            onChange={handleAdultsChange}
            disabled={!selectedRoom}
          >
            {Array.from({ length: selectedRoom?.maxOccupancy || 1 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Adult{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Booking start date</label>
          <input 
            type="text" 
            value={startDate ? startDate.toLocaleDateString() : 'Select date'}
            onClick={handleDateClick}
            readOnly
            style={{ cursor: 'pointer' }}
            placeholder="Click to select date"
          />
        </div>

        <div className="form-group">
          <label>Booking period</label>
          <select 
            value={bookingPeriod} 
            onChange={handleBookingPeriodChange}
          >
            <option value={1}>1 month</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
          </select>
        </div>

        <div className="form-group">
          <button 
            type="button" 
            className="btn-primary"
            onClick={handleBookNow}
            style={{ marginTop: '25px' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;