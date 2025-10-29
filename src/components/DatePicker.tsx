import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { setDatePickerOpen, setStartDate } from '../store/bookingSlice';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const DatePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDatePickerOpen, bookedDates, startDate } = useAppSelector(state => state.booking);
  
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (!isDatePickerOpen) return null;

  const today = new Date();
  const firstAvailableDate = new Date(today);
  firstAvailableDate.setDate(today.getDate() + 1); // Next day

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateBooked = (date: Date) => {
    return bookedDates.some(bookedDate => 
      bookedDate.toDateString() === date.toDateString()
    );
  };

  const isDatePast = (date: Date) => {
    return date < today;
  };

  const isDateAvailable = (date: Date) => {
    return date >= firstAvailableDate && !isDateBooked(date);
  };

  const isDateInRange = (date: Date) => {
    if (!startDate) return false;
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30); // 30 days from start
    return date >= startDate && date <= endDate;
  };

  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      dispatch(setStartDate(date));
    }
  };

  const handleClose = () => {
    dispatch(setDatePickerOpen(false));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isPast = isDatePast(date);
      const isBooked = isDateBooked(date);
      const isAvailable = isDateAvailable(date);
      const isSelected = startDate && date.toDateString() === startDate.toDateString();
      const isInRange = isDateInRange(date);

      let className = 'calendar-day';
      let style: React.CSSProperties = {};

      if (isPast) {
        className += ' past';
        style.backgroundColor = '#f5f5f5';
        style.color = '#ccc';
      } else if (isBooked) {
        className += ' booked';
        style.backgroundColor = '#FF6B47';
        style.color = 'white';
      } else if (isSelected) {
        className += ' selected';
        style.backgroundColor = '#4CAF50';
        style.color = 'white';
      } else if (isInRange) {
        className += ' in-range';
        style.backgroundColor = '#C8E6C9';
        style.color = '#2E7D32';
      } else if (isAvailable) {
        className += ' available';
        style.backgroundColor = 'white';
        style.color = '#333';
        style.cursor = 'pointer';
      }

      days.push(
        <div
          key={day}
          className={className}
          style={{
            ...style,
            padding: '10px',
            textAlign: 'center',
            border: '1px solid #eee',
            fontSize: '12px',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <h2>Select Booking Start Date</h2>
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button 
            className="btn-primary"
            style={{ marginBottom: '10px' }}
            onClick={() => {
              const nextAvailable = new Date(firstAvailableDate);
              dispatch(setStartDate(nextAvailable));
            }}
          >
            Go to first available date →
          </button>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Minimum booking period is one month. Select your start date and we'll highlight the available period.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Current Month */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <button onClick={handlePrevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <ChevronLeft size={20} />
              </button>
              <h3>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
              <button onClick={handleNextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1px',
              backgroundColor: '#eee',
              border: '1px solid #eee'
            }}>
              {dayNames.map(day => (
                <div key={day} style={{ 
                  padding: '5px', 
                  textAlign: 'center', 
                  backgroundColor: '#f9f9f9',
                  fontSize: '11px',
                  fontWeight: 'bold'
                }}>
                  {day}
                </div>
              ))}
              {renderCalendar()}
            </div>
          </div>

          {/* Next Month */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <h3>
                {monthNames[(currentMonth.getMonth() + 1) % 12]} {
                  currentMonth.getMonth() === 11 ? currentMonth.getFullYear() + 1 : currentMonth.getFullYear()
                }
              </h3>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1px',
              backgroundColor: '#eee',
              border: '1px solid #eee'
            }}>
              {dayNames.map(day => (
                <div key={day} style={{ 
                  padding: '5px', 
                  textAlign: 'center', 
                  backgroundColor: '#f9f9f9',
                  fontSize: '11px',
                  fontWeight: 'bold'
                }}>
                  {day}
                </div>
              ))}
              {(() => {
                const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
                const nextMonthDays = getDaysInMonth(nextMonth);
                const nextMonthFirstDay = getFirstDayOfMonth(nextMonth);
                const nextMonthCalendar = [];

                // Empty cells
                for (let i = 0; i < nextMonthFirstDay; i++) {
                  nextMonthCalendar.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
                }

                // Days
                for (let day = 1; day <= nextMonthDays; day++) {
                  const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
                  const isPast = isDatePast(date);
                  const isBooked = isDateBooked(date);
                  const isAvailable = isDateAvailable(date);
                  const isSelected = startDate && date.toDateString() === startDate.toDateString();
                  const isInRange = isDateInRange(date);

                  let style: React.CSSProperties = {};

                  if (isPast) {
                    style.backgroundColor = '#f5f5f5';
                    style.color = '#ccc';
                  } else if (isBooked) {
                    style.backgroundColor = '#FF6B47';
                    style.color = 'white';
                  } else if (isSelected) {
                    style.backgroundColor = '#4CAF50';
                    style.color = 'white';
                  } else if (isInRange) {
                    style.backgroundColor = '#C8E6C9';
                    style.color = '#2E7D32';
                  } else if (isAvailable) {
                    style.backgroundColor = 'white';
                    style.color = '#333';
                    style.cursor = 'pointer';
                  }

                  nextMonthCalendar.push(
                    <div
                      key={day}
                      style={{
                        ...style,
                        padding: '10px',
                        textAlign: 'center',
                        border: '1px solid #eee',
                        fontSize: '12px',
                        minHeight: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => handleDateClick(date)}
                    >
                      {day}
                    </div>
                  );
                }

                return nextMonthCalendar;
              })()}
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '20px', 
          display: 'flex', 
          gap: '15px', 
          fontSize: '12px',
          justifyContent: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#f5f5f5' }}></div>
            Past dates
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#FF6B47' }}></div>
            Booked
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#4CAF50' }}></div>
            Selected
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#C8E6C9' }}></div>
            Available period
          </div>
        </div>

        {startDate && (
          <div style={{ 
            marginTop: '20px', 
            textAlign: 'center',
            padding: '15px',
            backgroundColor: '#f0f8f0',
            borderRadius: '8px'
          }}>
            <p><strong>Selected start date:</strong> {startDate.toLocaleDateString()}</p>
            <p><strong>Available until:</strong> {new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
            <button 
              className="btn-primary" 
              onClick={handleClose}
              style={{ marginTop: '10px' }}
            >
              Confirm Date
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;