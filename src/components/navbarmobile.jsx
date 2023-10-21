import React, { useState } from 'react';
import '../style/navbar.css'; // Import your CSS file for styling
import coin from '../images/coin.png';

import heart from '../images/heart.png';
import chip from '../images/redchip-01.png'
import plus from '../images/Union.png'
import bg1 from '../images/bg1.jpeg'

const Navbar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const userName = 'John Doe'; // Replace with user's name
  const userId = '123456'; // Replace with user's ID
  const coinBalance = 100; // Replace with user's coin balance
  const tokenBalance = 500; // Replace with user's token balance

  const handleProfileClick = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title">SUITS</div>
      <div className="navbar-profile" onClick={handleProfileClick}>
        <span>{userName}</span>
        {isProfileMenuOpen && (
          <div className="profile-menu">
            <p>User ID: {userId}</p>
            <p>Coins: {coinBalance} <img src={coin} alt="coin"  width='15px'  /></p>
            <p>Tokens: {tokenBalance} <img src={chip} alt="token"  width='30px' /></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
