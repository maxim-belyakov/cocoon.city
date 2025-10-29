import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BookingForm from '../components/BookingForm';
import bookingReducer from '../store/bookingSlice';
import contactReducer from '../store/contactSlice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      booking: bookingReducer,
      contact: contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['booking/setStartDate'],
          ignoredPaths: ['booking.startDate', 'booking.bookedDates'],
        },
      }),
  });
};

const renderWithProvider = (component: React.ReactElement) => {
  const store = createMockStore();
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ),
    store,
  };
};

describe('BookingForm', () => {
  test('renders booking form with all fields', () => {
    renderWithProvider(<BookingForm />);
    
    expect(screen.getByText('Cocoon')).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Cocooners')).toBeInTheDocument();
    expect(screen.getByText('Booking start date')).toBeInTheDocument();
    expect(screen.getByText('Booking period')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });

  test('allows property selection', () => {
    renderWithProvider(<BookingForm />);
    
    const propertySelect = screen.getByDisplayValue(/Cocoon Place Coliving Warsaw/);
    expect(propertySelect).toBeInTheDocument();
    
    fireEvent.change(propertySelect, { target: { value: 'city-warsaw' } });
    // The change should be handled by Redux
  });

  test('allows room selection', () => {
    renderWithProvider(<BookingForm />);
    
    const roomSelect = screen.getByDisplayValue(/Deluxe singles hideout/);
    expect(roomSelect).toBeInTheDocument();
    
    fireEvent.change(roomSelect, { target: { value: 'premier-solo' } });
    // The change should be handled by Redux
  });

  test('date input is read-only and clickable', () => {
    renderWithProvider(<BookingForm />);
    
    const dateInput = screen.getByPlaceholderText('Click to select date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('readonly');
  });

  test('book now button is clickable', () => {
    renderWithProvider(<BookingForm />);
    
    const bookButton = screen.getByRole('button', { name: 'Book Now' });
    fireEvent.click(bookButton);
    // Should trigger date picker open action
  });
});