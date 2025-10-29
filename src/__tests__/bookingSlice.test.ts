import { configureStore } from '@reduxjs/toolkit';
import bookingReducer, {
  setSelectedProperty,
  setSelectedRoom,
  setAdults,
  setStartDate,
  setBookingPeriod,
  setDatePickerOpen,
  properties,
  rooms,
} from '../store/bookingSlice';

describe('bookingSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        booking: bookingReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['booking/setStartDate'],
            ignoredPaths: ['booking.startDate', 'booking.bookedDates'],
          },
        }),
    });
  });

  test('should set initial state', () => {
    const state = store.getState().booking;
    expect(state.selectedProperty).toEqual(properties[0]);
    expect(state.selectedRoom).toEqual(rooms[0]);
    expect(state.adults).toBe(1);
    expect(state.bookingPeriod).toBe(1);
    expect(state.isDatePickerOpen).toBe(false);
  });

  test('should set selected property', () => {
    const property = properties[1];
    store.dispatch(setSelectedProperty(property));
    const state = store.getState().booking;
    expect(state.selectedProperty).toEqual(property);
  });

  test('should set selected room', () => {
    const room = rooms[1];
    store.dispatch(setSelectedRoom(room));
    const state = store.getState().booking;
    expect(state.selectedRoom).toEqual(room);
  });

  test('should set adults count within room capacity', () => {
    // Select a room that allows 2 adults
    const duoRoom = rooms.find(room => room.maxOccupancy === 2);
    if (duoRoom) {
      store.dispatch(setSelectedRoom(duoRoom));
      store.dispatch(setAdults(2));
      const state = store.getState().booking;
      expect(state.adults).toBe(2);
    }
  });

  test('should not set adults count beyond room capacity', () => {
    // Select a single room
    const singleRoom = rooms.find(room => room.maxOccupancy === 1);
    if (singleRoom) {
      store.dispatch(setSelectedRoom(singleRoom));
      store.dispatch(setAdults(2)); // Try to set more than capacity
      const state = store.getState().booking;
      expect(state.adults).toBe(1); // Should remain 1
    }
  });

  test('should set start date', () => {
    const testDate = new Date('2025-03-15');
    store.dispatch(setStartDate(testDate));
    const state = store.getState().booking;
    expect(state.startDate).toEqual(testDate);
  });

  test('should set booking period', () => {
    store.dispatch(setBookingPeriod(6));
    const state = store.getState().booking;
    expect(state.bookingPeriod).toBe(6);
  });

  test('should set date picker open state', () => {
    store.dispatch(setDatePickerOpen(true));
    const state = store.getState().booking;
    expect(state.isDatePickerOpen).toBe(true);
  });
});