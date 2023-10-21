import React from 'react';
import '../style/style.css';
import { Box ,Button } from '@mui/material';
import image1 from '../images/ace_club.png';
import image2 from '../images/ace_diamond.png';
import image3 from '../images/ace_heart.png';
import image4 from '../images/ace_spade.png';
import heart from '../images/heart.png';
import coin from '../images/coin.png';


export default function Header() {
  return (
    <Box
      className="pixel"
      display='flex'
      flexDirection='column'
      // flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        background: 'linear-gradient(to right bottom, #0C6121, #01370F)',
      }}
      height='10vh'
      fontFamily='myFirstFont'
    >
      <Box
       className="pixel"
        border='6px solid #26AA47'
        display='flex'
        alignItems='center'
        color='white'
        fontWeight='bold'
        fontFamily='myFirstFont'
        sx={{
          backgroundColor: '#24BD4A',
        }}
        margin='18px 35px 0px 35px'
        borderRadius='25px'
        justifyContent='space-between'

      >
          <Box display="flex" alignItems="center" fontFamily='myFirstFont'>
          <img src={coin} alt="Coin" width="30px" />
          <p style={{ marginLeft: '10px', color: 'white', fontWeight: 'bold' }}>120</p>
          <Button
        color="primary"
        size="large"
        style={{ margin: '0px auto 0px', color: 'white', backgroundColor: 'transparent', fontSize: '26px', fontFamily: 'myFirstFont' }}>+</Button>
        </Box>
      
        
        <h1
          style={{
            // fontSize: '30px',
            margin: '0',
            fontWeight: '800',
            fontSize: '3rem',
            fontFamily: 'myFirstFont'
          }}
        >SUITS</h1>

        <Box
          style={{
            margin: '0'
          }}
          display='flex'
          flexDirection='row'
        >
          <div>

            <h2
              style={{
                // fontSize: '30px',
                margin: '0',
                fontWeight: '400',
                fontFamily: 'myFirstFont'
              }}
            >John Whatson</h2>
            <h4
              style={{
                margin: '0',
                textAlign: 'right',
                fontFamily: 'myFirstFont'

              }}
            >
              John_2932

            </h4>
          </div>

          <Box
            display='flex'
            alignItems='center' // Align items vertically
            justifyContent='center' // Center horizontally
            margin='0'
          >
            
            <img src={heart} alt="Image 1" style={{ Width: '40%' }} />
          </Box>


        </Box>





      </Box>

      <Box
        // border='3px solid black'
        display='flex'
        flexDirection='row'
      >


        <Box
           className="pixel"
          border='6px solid #26AA47'
          margin={{ xs: '5px', md: '30px' }}
          borderRadius='30px'
          width={{ xs: '100%', md: '27%' }}
          color='white'
          sx={{
            backgroundColor: '#0F6725',
          }}
        >
          <p
            style={{
              fontSize: '30px',
              fontWeight: '100',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'myFirstFont'

            }}

          >
            Account
          </p>

          <p
            style={{
              border: '1px solid black',
              backgroundColor: '#00350E',
              height: '20vh',
              margin: '5px',
              padding: '5px',
              fontSize: '30px',
              textAlign: 'center',
              fontFamily: 'myFirstFont'

            }}
          >
            Payment
          </p>

          <Box textAlign={{ xs: 'center', md: 'left' }} marginLeft={{ md: '20px' }}>
            <p style={{ fontSize: '23px' }}>Help and Support</p>

            <Box fontWeight='100'   fontFamily= 'myFirstFont'>
              <p>FAQs</p>
              <p>Tutorial</p>
              <p>Contact us</p>
              <p>Logout</p>
            </Box>
          </Box>

          <Box
            display={{ xs: 'block', md: 'flex' }}
            justifyContent='space-between'
            alignItems='center'
            margin='5px'
            fontFamily= 'myFirstFont'

          // marginTop={{ xs: '10px', md: '10vh' }}
          >
            <img src={image1} alt="Image 1" style={{ maxWidth: '25%' }} />
            <img src={image2} alt="Image 2" style={{ maxWidth: '25%' }} />
            <img src={image4} alt="Image 2" style={{ maxWidth: '25%' }} />
            <img src={image3} alt="Image 1" style={{ maxWidth: '25%' }} />
          </Box>
        </Box>
        <Box
          border='6px solid #26AA47'
          width='100%'
          margin={{ xs: '5px', md: '30px' }}
          borderRadius='30px'
          padding='30px'
          backgroundColor='#00350E'
          fontFamily= 'myFirstFont'

        >
          <Box display='flex' flexDirection='column'
            padding='20px'
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
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    border: '6px solid #1EA640',
                    width: '80%',
                    padding: '5px',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px'
                  }}
                >
                  Vipul
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
                  Last Name
                </h2>
                <p
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    border: '6px solid #1EA640',
                    width: '80%',
                    padding: '5px',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                  Sharma
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
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    border: '6px solid #1EA640',
                    width: '80%',
                    padding: '5px',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                  12349872
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
                  Email Id
                </h2>
                <p
                  style={{
                    margin: '0',
                    fontSize: '18px',
                    border: '6px solid #1EA640',
                    width: '80%',
                    padding: '5px',
                    backgroundColor: '#0F6725',
                    borderRadius: '20px',
                    marginTop: '6px',
                    fontFamily: 'myFirstFont'

                  }}
                >
                  Vipul@123.com
                </p>
              </div>
             
            </Box>
            
      {/* Back to Game Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        fontFamily= 'myFirstFont'
        style={{ margin: '20px auto 20px', backgroundColor: 'green' ,   fontFamily: 'myFirstFont'
      }}
      >
        Back to Game
      </Button>

          </Box>
        </Box>
      </Box>


    </Box>




  );
}
