import { configureStore } from '@reduxjs/toolkit';
import contactReducer, {
  openModal,
  closeModal,
  updateForm,
  setSubmitting,
  setSubmitted,
} from '../store/contactSlice';

describe('contactSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        contact: contactReducer,
      },
    });
  });

  test('should set initial state', () => {
    const state = store.getState().contact;
    expect(state.isModalOpen).toBe(false);
    expect(state.form.firstName).toBe('');
    expect(state.form.lastName).toBe('');
    expect(state.form.company).toBe('');
    expect(state.form.email).toBe('');
    expect(state.form.message).toBe('');
    expect(state.isSubmitting).toBe(false);
    expect(state.submitted).toBe(false);
  });

  test('should open modal', () => {
    store.dispatch(openModal());
    const state = store.getState().contact;
    expect(state.isModalOpen).toBe(true);
    expect(state.submitted).toBe(false);
  });

  test('should close modal and reset form', () => {
    // First set some form data
    store.dispatch(updateForm({ firstName: 'John', email: 'john@example.com' }));
    store.dispatch(openModal());
    
    // Then close modal
    store.dispatch(closeModal());
    const state = store.getState().contact;
    expect(state.isModalOpen).toBe(false);
    expect(state.form.firstName).toBe('');
    expect(state.form.email).toBe('');
  });

  test('should update form fields', () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      company: 'Acme Inc',
      message: 'Hello there!'
    };
    
    store.dispatch(updateForm(formData));
    const state = store.getState().contact;
    expect(state.form).toEqual(formData);
  });

  test('should set submitting state', () => {
    store.dispatch(setSubmitting(true));
    const state = store.getState().contact;
    expect(state.isSubmitting).toBe(true);
  });

  test('should set submitted state and reset submitting', () => {
    store.dispatch(setSubmitting(true));
    store.dispatch(setSubmitted(true));
    const state = store.getState().contact;
    expect(state.submitted).toBe(true);
    expect(state.isSubmitting).toBe(false);
  });
});