import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingState, Property, Room } from '../types';

const properties: Property[] = [
  { id: 'place-warsaw', name: 'Cocoon Place Coliving Warsaw', city: 'Warsaw', country: 'Poland', type: 'Place' },
  { id: 'city-warsaw', name: 'Cocoon City Warsaw', city: 'Warsaw', country: 'Poland', type: 'City' },
  { id: 'city-porto', name: 'Cocoon City Porto', city: 'Porto', country: 'Portugal', type: 'City' },
  { id: 'city-edinburgh', name: 'Cocoon City Edinburgh', city: 'Edinburgh', country: 'Scotland – UK', type: 'City' },
  { id: 'city-dubai', name: 'Cocoon City Dubai', city: 'Dubai', country: 'United Arab Emirates', type: 'City' },
];

const rooms: Room[] = [
  {
    id: 'deluxe-singles',
    name: 'Deluxe singles hideout',
    type: 'Deluxe singles hideout',
    maxOccupancy: 1,
    price: 1800,
    currency: 'PLN',
    size: '9sqm',
    features: [
      'Fully furnished',
      'Sofa bed',
      'Desk and chair',
      'Wardrove with mirror',
      'Shared bathroom',
      'Laundry room',
      'Flexible annual lease',
      'Penalty-free 30 day notice',
      'Fixed monthly online payments',
      'All utilities included',
      'No broker fees',
      'No bills hassle'
    ],
    description: 'Perfect for solo remote professionals seeking privacy and comfort.'
  },
  {
    id: 'premier-solo',
    name: 'Premier Solo Escape',
    type: 'Premier Solo Escape',
    maxOccupancy: 1,
    price: 1900,
    currency: 'PLN',
    size: '10-11sqm',
    features: [
      'Fully furnished',
      'Lux Sofa bed',
      'Desk and chair',
      'Wardrove with mirror',
      'Shared bathroom',
      'Laundry room',
      'Flexible annual lease',
      'Penalty-free 30 day notice',
      'Fixed monthly online payments',
      'All utilities included',
      'No broker fees',
      'No bills hassle'
    ],
    description: 'Upgraded solo space with luxury amenities.'
  },
  {
    id: 'junior-duo',
    name: 'Junior Duo Den',
    type: 'Junior Duo Den',
    maxOccupancy: 2,
    price: 2100,
    currency: 'PLN',
    size: '12sqm',
    features: [
      'Fully furnished',
      'Luxurious Double Bed',
      'Desk and chair',
      'Wardrove with mirror',
      'Chest of drawers',
      'Nightstand with lamp',
      'Shared bathroom',
      'Laundry room',
      'Flexible annual lease',
      'Penalty-free 30 day notice',
      'Fixed monthly online payments',
      'All utilities included',
      'No broker fees',
      'No bills hassle'
    ],
    description: 'Comfortable shared space for couples or friends.'
  },
  {
    id: 'executive-duo',
    name: 'Executive Duo Retreat',
    type: 'Executive Duo Retreat',
    maxOccupancy: 2,
    price: 2250,
    currency: 'PLN',
    size: '15sqm',
    features: [
      'Fully furnished',
      'Private balcony',
      'Luxurious Double Bed',
      'Chest of drawers',
      'Armchair',
      '2 x nightstands with lamp',
      'Wardrove with mirror',
      'Laundry Room',
      'Shared bathroom',
      'Flexible annual lease',
      'Penalty-free 30 day notice',
      'Fixed monthly online payments',
      'All utilities included',
      'No broker fees',
      'No bills hassle'
    ],
    description: 'Premium space with private balcony for ultimate comfort.'
  }
];

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