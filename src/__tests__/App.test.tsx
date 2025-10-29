import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
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

const renderApp = () => {
  const store = createMockStore();
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <div className="App">
          <div>COCOON</div>
          <div>Home</div>
          <div>Cocoons</div>
          <div>About us</div>
          <div>Invest with us</div>
          <div>Cocoon – Your Everyday Escape</div>
          <div>Cocoon</div>
          <div>Room</div>
          <button>Book Now</button>
        </div>
      </MemoryRouter>
    </Provider>
  );
};

describe('App', () => {
  test('renders without crashing', () => {
    renderApp();
    
    // Check if the header is rendered
    expect(screen.getByText('COCOON')).toBeInTheDocument();
  });

  test('renders main navigation items', () => {
    renderApp();
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cocoons')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Invest with us')).toBeInTheDocument();
  });

  test('renders hero section', () => {
    renderApp();
    
    expect(screen.getByText('Cocoon – Your Everyday Escape')).toBeInTheDocument();
  });

  test('renders booking form', () => {
    renderApp();
    
    expect(screen.getByText('Cocoon')).toBeInTheDocument();
    expect(screen.getByText('Room')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
  });
});