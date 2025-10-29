import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Header from '../components/Header';
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

const renderWithProviders = (component: React.ReactElement) => {
  const store = createMockStore();
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </Provider>
    ),
    store,
  };
};

describe('Header', () => {
  test('renders header with logo and navigation', () => {
    renderWithProviders(<Header />);
    
    expect(screen.getByText('COCOON')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cocoons')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Invest with us')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book now' })).toBeInTheDocument();
  });

  test('displays language switcher', () => {
    renderWithProviders(<Header />);
    
    expect(screen.getByText('PL')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  test('contact us button triggers contact modal', () => {
    const { store } = renderWithProviders(<Header />);
    
    const contactButton = screen.getByText('Contact us');
    fireEvent.click(contactButton);
    
    // Check if contact modal open action was dispatched
    const state = store.getState();
    expect(state.contact.isModalOpen).toBe(true);
  });

  test('book now button triggers date picker', () => {
    const { store } = renderWithProviders(<Header />);
    
    const bookButton = screen.getByRole('button', { name: 'Book now' });
    fireEvent.click(bookButton);
    
    // Check if date picker open action was dispatched
    const state = store.getState();
    expect(state.booking.isDatePickerOpen).toBe(true);
  });
});