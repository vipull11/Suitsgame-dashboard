import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import image1 from '../images/CA.png';
import image2 from '../images/DA.png';
import image3 from '../images/HA.png';
import image4 from '../images/SA.png';
import { useUser } from '../services/useContext';
import {  useEffect } from 'react';

import '../style/style.css';
export default function LeftSideBar({setAccount}) {
    const [AccountBackground, setAccountbackground] =
    useState('#rgb(14,103,37)');
const [paymentBackground, setpaymentbackground] =
    useState('#00350E'); 

    const { userData } = useUser();

    if (!userData) {
        return <div></div>;
      }
      const handleFaqClick = () => {
        // Do something when the "FAQs" option is clicked
        // For example, change the state to render the FAQ component
        setAccount(2); // Assuming 2 corresponds to the FAQ component
      };

  return (

    <Box
    className='pixel'
    fontfamily= 'myFirstFont'

    
    margin={{ xs: '5px', md: '30px' }}
    borderRadius='30px'
    width={{ xs: '100%', md: '27%' }}
    color='white'
    sx={{
    }}
>

    <Button
        className='custom-button'
        style={{
            color: 'white',
            fontFamily: 'myFirstFont',
            fontSize: '2rem',
            backgroundColor: AccountBackground,
            borderRadius: '30px 30px 0 0',
        }}
        onClick={() => {
            setAccount(1);
            setAccountbackground('#0E6725');
            setpaymentbackground('#00350E');
        }}
    >
        Account
    </Button>
    <Button
        className='custom-button'
        style={{
            color: 'white',
            fontFamily: 'myFirstFont',
            fontSize: '2rem',
            backgroundColor: paymentBackground,
        }}
        onClick={() => {
            setAccount(0);
            setAccountbackground('#00350E');
            setpaymentbackground('#0E6725');
        }}

    >
        Payment
    </Button>



    <p
        style={{

            fontfamily: 'myFirstFont',
            backgroundColor: '#00350E',
            height: '17vh',
            margin: '0',
            padding: '5px',
            fontSize: '20px',
            textAlign: 'center'
        }}
    >

    </p>

    <Box textAlign={{ xs: 'center', md: 'left' }} marginLeft={{ md: '20px' }}>
        <p style={{ fontSize: '23px',  fontfamily: 'myFirstFont',
 }}>Help and Support</p>

        <Box 
        fontWeight='100'
>
            <p style={{ cursor: 'pointer' }} onClick={handleFaqClick}>FAQs</p>
            <p>Tutorial</p>
            <p>Contact us</p>
        </Box>
    </Box>

    <Box
        display={{ xs: 'block', md: 'flex' }}
        justifyContent='space-between'
        alignItems='center'
        margin='5px'
        fontfamily= 'myFirstFont'

    // marginTop={{ xs: '10px', md: '10vh' }}
    >
        <img src={image1} alt="Image 1" style={{ maxWidth: '20%' }} />
        <img src={image2} alt="Image 2" style={{ maxWidth: '20%' }} />
        <img src={image4} alt="Image 2" style={{ maxWidth: '20%' }} />
        <img src={image3} alt="Image 1" style={{ maxWidth: '20%' }} />
    </Box>
</Box>

  )
}
