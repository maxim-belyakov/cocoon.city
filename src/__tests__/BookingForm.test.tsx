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

    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByText('Cocooners')).toBeInTheDocument();
    expect(screen.getByText('Booking start date')).toBeInTheDocument();
    expect(screen.getByText('Booking period')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'RESERVE ME' })).toBeInTheDocument();
  });

  test('shows the first room selected by default', () => {
    renderWithProvider(<BookingForm />);

    expect(screen.getByDisplayValue(/Deluxe singles hideout/)).toBeInTheDocument();
  });

  test('date input is read-only and shows the placeholder value', () => {
    renderWithProvider(<BookingForm />);

    const dateInput = screen.getByPlaceholderText('Select date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('readonly');
  });

  test('reserve button opens the date picker', () => {
    const { store } = renderWithProvider(<BookingForm />);

    fireEvent.click(screen.getByRole('button', { name: 'RESERVE ME' }));

    expect(store.getState().booking.isDatePickerOpen).toBe(true);
  });
});
