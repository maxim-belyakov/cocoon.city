export interface Property {
  id: string;
  name: string;
  city: string;
  country: string;
  type: 'Place' | 'City';
}

export interface Room {
  id: string;
  name: string;
  type: 'Deluxe singles hideout' | 'Premier Solo Escape' | 'Junior Duo Den' | 'Executive Duo Retreat';
  maxOccupancy: number;
  price: number;
  currency: string;
  size: string;
  features: string[];
  description: string;
}

export interface BookingState {
  selectedProperty?: Property;
  selectedRoom?: Room;
  adults: number;
  startDate?: Date;
  bookingPeriod: 1 | 6 | 12;
  isDatePickerOpen: boolean;
  bookedDates: Date[];
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

export interface ApplicationForm {
  personalInfo: {
    fullName: string;
    dateOfBirth: string;
    gender: 'Male' | 'Female' | 'Other';
    nationality: string;
    passportNumber: string;
    email: string;
    phone: string;
  };
  residencyInfo: {
    hasResidencePermit: boolean;
    permitType?: string;
    permitValidity?: string;
    requiresVisa: boolean;
    appliedForTempPermit: boolean;
    applicationDate?: string;
    currentStatus?: string;
    expectedArrival: string;
    additionalDocs: boolean;
  };
  accommodationPrefs: {
    moveInDate: string;
    lengthOfStay: string;
    roomType: 'Single Room' | 'Double Room' | 'Studio Apartment';
    specificRequirements: string;
    applyingWithPartner: boolean;
    partnerName?: string;
  };
  emergencyContact: {
    fullName: string;
    relationship: string;
    phone: string;
    email: string;
    address: string;
  };
}