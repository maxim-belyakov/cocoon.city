import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactForm } from '../types';

interface ContactState {
  isModalOpen: boolean;
  form: ContactForm;
  isSubmitting: boolean;
  submitted: boolean;
}

const initialState: ContactState = {
  isModalOpen: false,
  form: {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  },
  isSubmitting: false,
  submitted: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
      state.submitted = false;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.form = initialState.form;
    },
    updateForm: (state, action: PayloadAction<Partial<ContactForm>>) => {
      state.form = { ...state.form, ...action.payload };
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setSubmitted: (state, action: PayloadAction<boolean>) => {
      state.submitted = action.payload;
      if (action.payload) {
        state.isSubmitting = false;
      }
    },
  },
});

export const {
  openModal,
  closeModal,
  updateForm,
  setSubmitting,
  setSubmitted,
} = contactSlice.actions;

export default contactSlice.reducer;