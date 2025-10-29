import React from 'react';
import { X, Mail } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { closeModal, updateForm, setSubmitting, setSubmitted } from '../store/contactSlice';

const ContactModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, form, isSubmitting, submitted } = useAppSelector(state => state.contact);

  if (!isModalOpen) return null;

  const handleInputChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(updateForm({ [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    dispatch(setSubmitting(true));
    
    // Simulate form submission
    setTimeout(() => {
      dispatch(setSubmitted(true));
      setTimeout(() => {
        dispatch(closeModal());
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Contact us</h2>
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            color: '#4CAF50'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
            <h3>Thank you!</h3>
            <p>We'll get back to you in a flash!</p>
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              Let us know how we can reach you and we'll get back to you in a flash!
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={handleInputChange('firstName')}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={handleInputChange('lastName')}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={handleInputChange('company')}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleInputChange('email')}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={handleInputChange('message')}
                  rows={4}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div style={{ 
              marginTop: '30px', 
              paddingTop: '20px',
              borderTop: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                <span style={{ fontSize: '14px' }}>@cocoon.city</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>📱</span>
                <span style={{ fontSize: '14px' }}>+48 734 663 453</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;