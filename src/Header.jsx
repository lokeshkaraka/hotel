
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import BookingForm from './BookingForm';

const Header = () => {
  const { toggleDarkMode } = useTheme();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookHereClick = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Stay</li>
          <li>Contact Us</li>
          <li>Special Offers</li>
        </ul>
        <button className = 'dark'onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <button className='book' onClick={handleBookHereClick}>BOOK A STAY</button>
      </nav>
      {showBookingForm && <BookingForm onClose={handleCloseBookingForm} />}
    </header>
  );
};

export default Header;
