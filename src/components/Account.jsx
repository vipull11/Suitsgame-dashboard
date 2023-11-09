import React from 'react';
import '../style/style.css';
import { Box, Button } from '@mui/material';
import { useUser } from '../services/useContext';
import { useState, useEffect } from 'react';
import { purple } from '@mui/material/colors';
 
export default function Account() {
  const { userData } = useUser();

 
    const handleButtonClick = () => {
      
      window.location.href = 'http://suitscardgame.com'
    };
  

    if (!userData) {
         return<div style={{width:'100vw' , height: '100vh', display: 'flex' , justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
         <div class="hourglass">
        
        </div>
        <h1 style={{fontFamily: 'myFirstFont', color: 'white'}}>LOADING...</h1>
         </div>;
      }
      return (
        <Box
          className='pixel7'
          width='100vw'
          margin={{ xs: '5px', md: '30px', sm: '5px' }}
          
          borderRadius='30px'
          padding='30px'
          backgroundColor='#00350E'
          fontFamily='myFirstFont'
          overflow='auto'
          sx={{ my: 1 }}
          textAlign='center'
        >
          <Box
            display='flex'
            flexDirection='column'
            sx={{ minHeight: '100%' }}
            color='#C6F5D2'
            textAlign='left'
            alignItems='center'
            justifyContent='center'
          >
            {console.log(userData)}
            <div style={{ width: '100%',  display: 'flex' , flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center'}}>
              <h2 style={{ fontFamily: 'myFirstFont', margin: '0' }}>First Name</h2>
              <p className='pixel1' style={{ margin: '0', width: '80%', backgroundColor: '#0F6725', borderRadius: '20px', marginTop: '6px' }}>{userData.data.FullName}</p>
            </div>
            <div style={{ width: '100%',  display: 'flex' , marginTop: '20px', flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center'}}>
              <h2 style={{ fontFamily: 'myFirstFont', margin: '0' }}>tournament Streak</h2>
              <p className='pixel1' style={{ margin: '0', width: '80%', backgroundColor: '#0F6725', borderRadius: '20px', marginTop: '6px' }}>{userData.data.tournamentStreak}</p>
            </div>
            <div style={{ width: '100%',  display: 'flex' , marginTop: '20px', flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center'}}>
              <h2 style={{ fontFamily: 'myFirstFont', margin: '0' }}>User Id</h2>
              <p className='pixel1' style={{ margin: '0', width: '80%', backgroundColor: '#0F6725', borderRadius: '20px', marginTop: '6px' }}>{userData.data._id}</p>
            </div>
            <div style={{ width: '100%',  display: 'flex' , marginTop: '20px', flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center'}}>
              <h2 style={{ fontFamily: 'myFirstFont', margin: '0' }}>Contact Info</h2>
              <p className='pixel1' style={{ margin: '0', width: '80%', backgroundColor: '#0F6725', borderRadius: '20px', marginTop: '6px' }}>{userData.data.phone}</p>
            </div>
    
            {/* Back to Game Button */}
            <Button
              variant="contained"
              className='pixel1'
              color="primary"
              size="large"
              style={{ margin: '20px 0', backgroundColor: 'green', fontFamily: 'inherit' }}
              onClick={handleButtonClick}
            >
              Back to Game
            </Button>
          </Box>
        </Box>
      );
    }
    
