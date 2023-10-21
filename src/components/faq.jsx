import React from 'react'
import { Box ,Button, TextField } from '@mui/material';
import { useUser } from '../services/useContext';
import { useState, useEffect } from 'react';
 
import '../style/style.css';


export default function Faq() {
  const { userData } = useUser();

  if (!userData) {
      return <div></div>;
    }

  return (
    <Box
    className='pixel'
    fontFamily= 'myFirstFont'
    height='63vh'
    width='100%'
    margin={{ xs: '5px', md: '30px' }}
    borderRadius='30px'
    padding='30px'
      backgroundColor='#00350E'
      display='flex'    
      flexDirection='column'  
      alignContent='center'
    // justifyContent='center'
     alignItems='center'
    >

<div style={{display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
        <h1 style={{fontFamily: 'myFirstFont' , color: 'white', fontSize: '3vw', margin: 0}}> FAQs</h1>

        <div style={{ textAlign: 'left', width: '100%' }}>
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         1. Can my account be used on multiple devices?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
           Yes! Simply log in using your credentials and you’ll be able to use the account on any device that can access the web.
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         2. What is the minimum amount that I’ll be able to transfer to my bank?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          The minimum amount that you can transfer to the bank is 4000.
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         3. Do I need to download the game onto my device?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          No! For now, we only require you to visit our website URL to play the game.
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         4. What happens if I disconnect in the middle of a match?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          Your turn timer will continue to tick down for the other player. You can reconnect, but the turns you pass on the timer will still be lost.
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         5. How do I earn in-game currency?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          You can use money from your attached payment platform to get chips in the game. These chips can be used to enter into tournaments, which pay out in real money!
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         6. How does this game protect me from scammers/cheaters?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          All of our cash-out transactions have a short window of time where they are approved by our staff. If an account is flagged for suspicious activity, it is temporarily frozen and reviewed by us. Accounts that are scamming/cheating will be deleted.
        </p>
        
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
         7. Can I play offline?
        </p>
        <p style={{ fontSize: '0.8rem', color: 'white', marginBottom: '20px' }}>
          There is currently no support for an offline version of the client.
        </p>
      </div>

    </div>  
  </Box>
  )
}
