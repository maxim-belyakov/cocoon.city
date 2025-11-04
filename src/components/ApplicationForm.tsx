import React, { useState } from 'react';

interface ApplicationFormProps {
  onClose?: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const [travelPurpose, setTravelPurpose] = useState<'Work' | 'Leisure' | 'Study'>('Work');
  const [showResidencyInfo, setShowResidencyInfo] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Data
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    email: '',
    phone: '',

    // Company Address
    company: '',
    companyAddress: '',
    zipCode: '',
    city: '',
    country: '',

    // Residency Information (for students)
    hasResidencePermit: false,
    permitType: '',
    permitValidityFrom: '',
    permitValidityTo: '',
    requiresVisa: false,
    appliedForTempPermit: false,
    applicationDate: '',
    currentStatus: '',
    expectedArrivalDate: '',
    hasAdditionalDocs: false,

    // Accommodation Preferences
    moveInDate: '',
    lengthOfStay: '',
    roomType: 'Deluxe singles hideout' as const,
    specificRequirements: '',
    applyingWithPartner: false,
    partnerName: '',

    // Emergency Contact
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    emergencyEmail: '',
    emergencyAddress: '',

    // Declaration
    agreeToTerms: false,
    signature: '',
    signatureDate: '',
  });

  React.useEffect(() => {
    setShowResidencyInfo(travelPurpose === 'Study');
  }, [travelPurpose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '40px',
      maxWidth: '900px',
      margin: '40px auto',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: 'var(--flamingo-pink)',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '28px'
      }}>
        Booking Application Form
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Travel Purpose */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Travel Purpose
          </h3>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Work', 'Leisure', 'Study'].map((purpose) => (
              <label key={purpose} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="travelPurpose"
                  value={purpose}
                  checked={travelPurpose === purpose}
                  onChange={(e) => setTravelPurpose(e.target.value as any)}
                />
                <span>{purpose}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Contact Data of Main Cocooner */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Contact Data of Main Cocooner
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label>First Name (As it appears on your passport)</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name (As it appears on your passport)</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Month and Year of Birth (DD/MM/YYYY)</label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange('birthDate', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div style={{ display: 'flex', gap: '15px', marginTop: '12px' }}>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <label key={gender} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                    />
                    {gender}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number (Including Country Code)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Company Address */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Company Address
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Address</label>
              <input
                type="text"
                value={formData.companyAddress}
                onChange={(e) => handleInputChange('companyAddress', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>ZIP / Post Box</label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Residency Information (only for students) */}
        {showResidencyInfo && (
          <section style={{ marginBottom: '40px', background: 'var(--linen)', padding: '30px', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
              Residency Information (Required for Students)
            </h3>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div className="form-group">
                <label>Do you currently hold a residence permit in Poland?</label>
                <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="hasResidencePermit"
                      checked={formData.hasResidencePermit === true}
                      onChange={() => handleInputChange('hasResidencePermit', true)}
                    />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="hasResidencePermit"
                      checked={formData.hasResidencePermit === false}
                      onChange={() => handleInputChange('hasResidencePermit', false)}
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.hasResidencePermit && (
                <>
                  <div className="form-group">
                    <label>Type of Permit</label>
                    <input
                      type="text"
                      value={formData.permitType}
                      onChange={(e) => handleInputChange('permitType', e.target.value)}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label>Validity From Date (DD/MM/YYYY)</label>
                      <input
                        type="date"
                        value={formData.permitValidityFrom}
                        onChange={(e) => handleInputChange('permitValidityFrom', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Validity To Date (DD/MM/YYYY)</label>
                      <input
                        type="date"
                        value={formData.permitValidityTo}
                        onChange={(e) => handleInputChange('permitValidityTo', e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Do you require a visa to enter/stay in Poland?</label>
                <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="requiresVisa"
                      checked={formData.requiresVisa === true}
                      onChange={() => handleInputChange('requiresVisa', true)}
                    />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="requiresVisa"
                      checked={formData.requiresVisa === false}
                      onChange={() => handleInputChange('requiresVisa', false)}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Have you applied for a temporary residence permit in Poland?</label>
                <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="appliedForTempPermit"
                      checked={formData.appliedForTempPermit === true}
                      onChange={() => handleInputChange('appliedForTempPermit', true)}
                    />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="appliedForTempPermit"
                      checked={formData.appliedForTempPermit === false}
                      onChange={() => handleInputChange('appliedForTempPermit', false)}
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.appliedForTempPermit && (
                <>
                  <div className="form-group">
                    <label>Application Date (DD/MM/YYYY)</label>
                    <input
                      type="date"
                      value={formData.applicationDate}
                      onChange={(e) => handleInputChange('applicationDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Current Status</label>
                    <input
                      type="text"
                      value={formData.currentStatus}
                      onChange={(e) => handleInputChange('currentStatus', e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Expected Arrival Date in Poland (DD/MM/YYYY)</label>
                <input
                  type="date"
                  value={formData.expectedArrivalDate}
                  onChange={(e) => handleInputChange('expectedArrivalDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Do you have any additional documentation related to your stay in Poland?</label>
                <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="hasAdditionalDocs"
                      checked={formData.hasAdditionalDocs === true}
                      onChange={() => handleInputChange('hasAdditionalDocs', true)}
                    />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="hasAdditionalDocs"
                      checked={formData.hasAdditionalDocs === false}
                      onChange={() => handleInputChange('hasAdditionalDocs', false)}
                    />
                    No
                  </label>
                </div>
                {formData.hasAdditionalDocs && (
                  <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    Please attach copies together with residence permits, passport copy, national identification card copy.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Accommodation Preferences */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Accommodation Preferences
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label>Preferred Move-In Date (DD/MM/YYYY)</label>
              <input
                type="date"
                value={formData.moveInDate}
                onChange={(e) => handleInputChange('moveInDate', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Preferred Length of stay (months)</label>
              <input
                type="number"
                value={formData.lengthOfStay}
                onChange={(e) => handleInputChange('lengthOfStay', e.target.value)}
                min="1"
                required
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Preferred Room Type</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                {['Deluxe singles hideout', 'Premier Solo Escape', 'Junior Duo Den', 'Executive Duo Retreat'].map((room) => (
                  <label key={room} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="radio"
                      name="roomType"
                      value={room}
                      checked={formData.roomType === room}
                      onChange={(e) => handleInputChange('roomType', e.target.value)}
                    />
                    {room}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Do you have any specific requirements or preferences?</label>
              <textarea
                value={formData.specificRequirements}
                onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #ddd',
                  borderRadius: '4px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px'
                }}
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Are you applying with a friend or partner?</label>
              <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="radio"
                    name="applyingWithPartner"
                    checked={formData.applyingWithPartner === true}
                    onChange={() => handleInputChange('applyingWithPartner', true)}
                  />
                  Yes
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="radio"
                    name="applyingWithPartner"
                    checked={formData.applyingWithPartner === false}
                    onChange={() => handleInputChange('applyingWithPartner', false)}
                  />
                  No
                </label>
              </div>
              {formData.applyingWithPartner && (
                <div className="form-group" style={{ marginTop: '15px' }}>
                  <label>Please provide their full name</label>
                  <input
                    type="text"
                    value={formData.partnerName}
                    onChange={(e) => handleInputChange('partnerName', e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Contact Information */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Emergency Contact Information
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label>First Name and Surname</label>
              <input
                type="text"
                value={formData.emergencyName}
                onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Relationship to Applicant</label>
              <input
                type="text"
                value={formData.emergencyRelationship}
                onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number (Including Country Code)</label>
              <input
                type="tel"
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.emergencyEmail}
                onChange={(e) => handleInputChange('emergencyEmail', e.target.value)}
                required
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Address (Include province, city, postal code)</label>
              <input
                type="text"
                value={formData.emergencyAddress}
                onChange={(e) => handleInputChange('emergencyAddress', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Attachments */}
        <section style={{ marginBottom: '40px', background: 'var(--linen)', padding: '30px', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Attachments
          </h3>
          <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '10px' }}>Please ensure the following documents are attached:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Copy of Passport</li>
              {travelPurpose === 'Study' && <li>Proof of Enrolment at University</li>}
              {travelPurpose === 'Study' && <li>Any Relevant Visa or Residency Documentation</li>}
              <li>Additional Supporting Documents (if applicable)</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                style={{
                  padding: '10px',
                  border: '2px dashed var(--sage-green)',
                  borderRadius: '4px',
                  width: '100%',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>
        </section>

        {/* Declaration */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: 'var(--deep-taupe)', marginBottom: '20px', fontSize: '20px' }}>
            Declaration
          </h3>
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'start', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                required
                style={{ marginTop: '4px' }}
              />
              <span style={{ fontSize: '14px', lineHeight: '1.6' }}>
                I hereby declare that the information provided in this application is true and accurate to the best of my knowledge.
                I understand that providing false information may result in the rejection of my application or termination of my accommodation agreement.
              </span>
            </label>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div className="form-group">
              <label>Digital Signature</label>
              <input
                type="text"
                value={formData.signature}
                onChange={(e) => handleInputChange('signature', e.target.value)}
                placeholder="Type your full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={formData.signatureDate}
                onChange={(e) => handleInputChange('signatureDate', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            type="submit"
            className="btn-primary"
            style={{
              padding: '15px 60px',
              fontSize: '16px'
            }}
          >
            Submit Application
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{
                padding: '15px 60px',
                fontSize: '16px',
                marginLeft: '20px'
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
