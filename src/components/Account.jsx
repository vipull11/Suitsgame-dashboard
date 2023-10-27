import React from 'react';
import '../style/style.css';
import { Box, Button } from '@mui/material';
import { useUser } from '../services/useContext';
import { useState, useEffect } from 'react';
import { purple } from '@mui/material/colors';
 
export default function Account() {
  const { userData } = useUser();

 
    const handleButtonClick = () => {
      
      window.location.href = 'https://suitscardgame.com'
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
          className='pixel'
          
          width='100vw'
          margin={{ xs: '5px', md: '30px', sm: '5px'  }}
          borderRadius='30px'
          padding='30px'
          backgroundColor='#00350E'
         
          fontFamily= 'myFirstFont'
          overflow= 'auto'
          sx={{my: 1}}
       

        >
          <Box display='flex' flexDirection='column'
            sx={{minHeight: '100%'}}
            color='#C6F5D2'
            
          >
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-evenly'
              textAlign='left'
              alignItems='center'

            >

              <div
                style={{
                 
                  width: '40%',

                }}
              >
                <h2
                  style={{
                    fontFamily: 'myFirstFont',

                    margin: '0'

                  }}
                >
                  First Name
                </h2>
                <p
                 className = 'pixel1'
                  style={{
                    margin: '0',
                    fontSize: '24px',
                    width: '100%',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px'
                  }}
                >
                  {userData.data.FullName}
                </p>
              </div>
              



            </Box>

            <Box
              display='flex'
              fontFamily= 'myFirstFont'
              
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent='space-evenly'
              textAlign='left'
              alignItems='center'
              marginTop='30px'

            >

              <div
                style={{
                  // border: '2px solid black',
        
                  width: '40%'
                }}
              >
                <h2
                  style={{
                    fontFamily: 'myFirstFont',

                    // border: '2px solid black',
                    margin: '0'
                  }}
                >
                  Account Type
                </h2>
                <p
                  className = 'pixel1'
                  style={{
                    margin: '0',
                    fontSize: '24px',
                    width: '100%',
                    
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                  {userData.data.accountType}
                </p>
              </div>
              
            </Box>

            <Box
              display='flex'
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent='space-evenly'
              textAlign='left'
              alignItems='center'
              marginTop='40px'
              fontFamily= 'myFirstFont'

            >

              <div
                style={{
                  // border: '2px solid black',
                  width: '40%'
                }}
              >
                <h2
                  style={{
                    // border: '2px solid black',
                    fontFamily: 'myFirstFont',

                    margin: '0'
                  }}
                >
                  User Id
                </h2>
                <p
                 className = 'pixel1'
                  style={{
                    margin: '0',
                    fontSize: '24px',
                    width: '100%',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                 {userData.data._id}
                </p>
              </div>
              



            </Box>

            <Box
              display='flex'
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent='space-evenly'
              textAlign='left'
              alignItems='center'
              marginTop='40px'
              fontFamily= 'myFirstFont'


            >

              <div
                style={{
                  // border: '2px solid black',
                  width: '40%'
                }}
              >
                <h2
                  style={{
                    // border: '2px solid black',
                    fontFamily: 'myFirstFont',

                    margin: '0'
                  }}
                >
                  Contact Info
                </h2>
                <p
                 className = 'pixel1'
                  style={{
                    
                    margin: '0',
                    fontSize: '24px',
                    width: '100%',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                  {userData.data.phone}
                </p>
              </div>
             
            </Box>
            
      {/* Back to Game Button */}
      <Button
        variant="contained"
        className = 'pixel1'
        color="primary"
        size="large"
        style={{ margin: '8px auto 20px', backgroundColor: 'green' ,   fontFamily: 'inherit',
        marginTop: '15px',  
      }}
      onClick = {handleButtonClick}
      >
        Back to Game
      </Button>

          </Box>
        </Box>
     

  )
}
