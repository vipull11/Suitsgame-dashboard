import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useUser } from '../services/useContext';
import '../style/style.css';
import chip from '../images/redchip-01.png';
import coin from '../images/rupees.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Stripe from './stripe';
import Modal from './modal';

export default function MobileSidebar({ setAccount }) {
  const [AccountBackground, setAccountbackground] = useState(' #00350E');
  const [paymentBackground, setpaymentbackground] = useState('#rgb(14,103,37)');
  const { userData } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFaqClick = () => {
    setAccount(2);
    setIsExpanded(false); // Close the sidebar after button click
  };

  const handleContactClick = () => {
    setAccount(3);
    setIsExpanded(false); // Close the sidebar after button click
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  if (!userData) {
    return <div></div>;
  }

  return (
    <div className={`mobile-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className={`toggle-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleSidebar}>
        {isExpanded ? <AiOutlineClose /> : <FaBars />}
      </button>
      {isExpanded && (
        <Box className='sidebar-content'>
          <div className='box-right-id1' style={{ marginBottom: '30px' }}>
            <h2
              style={{
                margin: '0',
                fontWeight: '400',
                color: 'white',
                fontFamily: 'myFirstFont',
              }}
            >
              {userData.data.FullName}
            </h2>
            <h4
              style={{
                margin: '0',
                textAlign: 'right',
                fontFamily: 'myFirstFont',
                color: 'white',
              }}
            >
              {userData.data._id}
            </h4>
          </div>
          <Box style={{ margin: '0' }} display='flex' flexDirection='row'>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
              <Box display='flex' alignItems='center' justifyContent='center' marginRight='10px'>
                <img src={chip} alt='Chip' width='35px' />
              </Box>
              <h1 style={{ fontSize: '3.5vw', color: 'white' }}>{userData.data.currentCoin}</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px', transition: 'width 1s ease' }}>
              <Box display='flex' alignItems='center' justifyContent='center' marginLeft='10px' marginRight='10px'>
                <img src={coin} alt='Coin' width='35px' />
              </Box>
              <h1 style={{ fontSize: '3.5vw', color: 'white' }}>{userData.data.totalCash}</h1>
            </div>
          </Box>
          <Button
            className='custom-button'
            style={{
              transition: 'width 3s ease',
              color: 'white',
              fontFamily: 'myFirstFont',
              fontSize: '2rem',
              backgroundColor: AccountBackground,
            }}
            onClick={() => {
              setAccount(1);
              setAccountbackground('#00350E');
              setpaymentbackground('#0E6725');
              setIsExpanded(false);
            }}
          >
            Account
          </Button>
          <Button
            className='custom-button'
            style={{
              transition: 'width 3s ease',
              color: 'white',
              fontFamily: 'myFirstFont',
              fontSize: '2rem',
              backgroundColor: paymentBackground,
            }}
            onClick={() => {
              setAccount(0);
              setAccountbackground('#0E6725');
              setpaymentbackground(' #00350E');
              setIsExpanded(false);
            }}
          >
            Payment
          </Button>
          <Box fontWeight='100'>
            <p style={{ cursor: 'pointer', color: 'white' }} onClick={handleFaqClick}>
              FAQs
            </p>
            <p style={{ cursor: 'pointer', color: 'white' }} onClick={handleContactClick}>
              Contact us
            </p>
          </Box>
        </Box>
      )}
    </div>
  );
}
