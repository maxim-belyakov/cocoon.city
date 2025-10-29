import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['booking/setStartDate', 'booking/addBookedDate'],
        ignoredPaths: ['booking.startDate', 'booking.bookedDates'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;