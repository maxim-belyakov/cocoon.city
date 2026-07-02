import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const {
    selectedProperty, 
    selectedRoom, 
    adults, 
    bookingPeriod, 
    startDate 
  } = useAppSelector(state => state.booking);

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
          <label>{t('booking.room')}</label>
          <select
            value={selectedRoom?.id || ''}
            onChange={handleRoomChange}
          >
            <option value="">{t('booking.selectRoom')}</option>
            {rooms.map(room => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>{t('booking.cocooners')}</label>
          <select
            value={adults}
            onChange={handleAdultsChange}
            disabled={!selectedRoom}
          >
            {Array.from({ length: selectedRoom?.maxOccupancy || 1 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i > 0 ? t('booking.adults') : t('booking.adult')}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>{t('booking.startDate')}</label>
          <input
            type="text"
            value={startDate ? startDate.toLocaleDateString() : t('booking.selectDate')}
            onClick={handleDateClick}
            readOnly
            style={{ cursor: 'pointer' }}
            placeholder={t('booking.selectDate')}
          />
        </div>

        <div className="form-group">
          <label>{t('booking.period')}</label>
          <select
            value={bookingPeriod}
            onChange={handleBookingPeriodChange}
          >
            <option value={1}>{t('booking.month', { count: 1 })}</option>
            <option value={6}>{t('booking.month', { count: 6 })}</option>
            <option value={12}>{t('booking.month', { count: 12 })}</option>
          </select>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn-primary"
            onClick={handleBookNow}
            style={{ marginTop: '25px' }}
          >
            {t('nav.reserve')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;