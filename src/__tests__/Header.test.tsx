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
  test('renders logo and navigation', () => {
    renderWithProviders(<Header />);

    expect(screen.getByAltText('COCOON Coliving')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cocoons')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Invest with us')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'RESERVE ME' })).toBeInTheDocument();
  });

  test('displays language switcher', () => {
    renderWithProviders(<Header />);

    expect(screen.getByText('PL')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  test('contact us button triggers contact modal', () => {
    const { store } = renderWithProviders(<Header />);

    fireEvent.click(screen.getByText('Contact us'));

    expect(store.getState().contact.isModalOpen).toBe(true);
  });

  test('reserve button triggers date picker', () => {
    const { store } = renderWithProviders(<Header />);

    fireEvent.click(screen.getByRole('button', { name: 'RESERVE ME' }));

    expect(store.getState().booking.isDatePickerOpen).toBe(true);
  });
});
