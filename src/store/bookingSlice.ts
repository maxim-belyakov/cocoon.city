import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingState, Property, Room } from '../types';
import { properties as propertiesData, rooms as roomsData } from '../data/properties';

const properties = propertiesData;
const rooms = roomsData;

const initialState: BookingState = {
  selectedProperty: properties[0],
  selectedRoom: rooms[0],
  adults: 1,
  bookingPeriod: 1,
  isDatePickerOpen: false,
  bookedDates: [
    new Date('2025-02-15'),
    new Date('2025-02-16'),
    new Date('2025-02-17'),
    new Date('2025-03-10'),
    new Date('2025-03-11'),
  ]
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedProperty: (state, action: PayloadAction<Property>) => {
      state.selectedProperty = action.payload;
    },
    setSelectedRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRoom = action.payload;
      state.adults = action.payload.maxOccupancy === 1 ? 1 : state.adults;
    },
    setAdults: (state, action: PayloadAction<number>) => {
      if (state.selectedRoom && action.payload <= state.selectedRoom.maxOccupancy) {
        state.adults = action.payload;
      }
    },
    setStartDate: (state, action: PayloadAction<Date | undefined>) => {
      state.startDate = action.payload;
    },
    setBookingPeriod: (state, action: PayloadAction<1 | 6 | 12>) => {
      state.bookingPeriod = action.payload;
    },
    setDatePickerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDatePickerOpen = action.payload;
    },
    addBookedDate: (state, action: PayloadAction<Date>) => {
      state.bookedDates.push(action.payload);
    },
  },
});

export const {
  setSelectedProperty,
  setSelectedRoom,
  setAdults,
  setStartDate,
  setBookingPeriod,
  setDatePickerOpen,
  addBookedDate,
} = bookingSlice.actions;

export { properties, rooms };
export default bookingSlice.reducer;