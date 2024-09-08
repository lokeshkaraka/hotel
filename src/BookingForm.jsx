
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState('');
  const [price, setPrice] = useState(0);

  const basePricePerDay = 1200;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onClose();
  };

  React.useEffect(() => {
    if (!checkInDate || !checkOutDate) {
      setPrice(0);
      return;
    }

    const daysDiff = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (daysDiff < 0) {
      alert('Check-out date cannot be before check-in date');
      return;
    }

    setNumberOfDays(daysDiff + 1);
    setPrice(basePricePerDay * (daysDiff + 1)); 
  }, [checkInDate, checkOutDate]);

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Check-in Date:
          <DatePicker selected={checkInDate}
           onChange={(date) => setCheckInDate(date)} 
           dateFormat="dd/MM/yyyy" />
        </label>
        <label>
          Check-out Date:
          <DatePicker selected={checkOutDate} 
          onChange={(date) => setCheckOutDate(date)}
           dateFormat="dd/MM/yyyy" />
        </label>
        <label><br></br>
          Number of Days: {numberOfDays}
        </label>
        <label>
          Total Price: {price} Rs
        </label><br></br>
        <button type="submit">Check Avalibility</button>
      </form>
    </div>
  );
};

export default BookingForm;
