 import React from 'react'
import { Box ,Button, TextField, Modal} from '@mui/material';
import { useUser } from '../services/useContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
 
import '../style/style.css';


export default function Payment() {
  const { userData } = useUser();
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [token, setToken] = useState(() => {
    // Retrieve token from local storage or set it to an empty string if not found
    return localStorage.getItem('token1');
    
  });
  const handleButtonClick = () => {
      
    window.location.href = 'https://suitscardgame.com'
   
  };


  const handleWithdrawalSubmit = () => {
    if (withdrawAmount < 4000) {
      setErrorMessage('Withdrawal amount should be above 1000');
      return; // Stop further execution if withdrawal amount is below 4000
    }
    if (withdrawAmount > userData.data.totalCash) {
      setErrorMessage('You do not have enough cash');
      return;
    }
    console.log(userData.data.totalCash)
    console.log(token)
    axios
    .post('https://api.suitscardgame.com/api/v1/auth/withdrawl', {
      withdrawlAmount: withdrawAmount,
      paymentAddress: paymentId,
      userName: userData.data.FullName,
      userID: userData.data._id
    // }, {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // Attach the JWT token to the Authorization header
    //   }
    })
      .then((response) => {
        // Handle the API response here
        if (response.data.success) {
          // Show a success message or perform any necessary actions
          console.log('Request sent successfully');
          setIsModalOpen(false);
         window.location.reload(); // 
        } else {
          // Handle the case when the request fails
          console.error('Request failed:', response.data.message);
        }
        setIsModalOpen(false); // Close the modal after the request is processed
      })
      .catch((error) => {
        console.error('Error submitting withdrawal request:', error);
        setIsModalOpen(false); // Close the modal in case of error
      });
  };

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

      <Box
        width='60%'
      >
        
        
      <Box
        className='pixel2'
       
        left='30%'
        right='30%'
        fontFamily= 'myFirstFont'

        
      >
        Total Winnings
         
        <h4 className='paymentDataText'>{userData.data.totalWinCoin}</h4>
        
    </Box>  
      <Box
         className = 'pixel2'
      >
        Payment received
        <h4 className='paymentDataText'>{userData.data.totalPaymetRecived}</h4>
    </Box>  
      <Box
         className = 'pixel2'
         fontFamily= 'myFirstFont'

      >
        Withdrawal Limit 
        <h4 className='paymentDataText'>1000</h4>

        </Box> 
       
        <Box
         
          style={{
          display:'flex',
          justifyContent: 'space-between',
          // border: '3px solid',
          marginLeft: '25px',
          marginRight:'15%',
          fontFamily:'myFirstFont'

        }}
        >
          <TextField
           className='pixel1'
            variant='outlined'
            placeholder='Enter Cashout amount'
            value={withdrawAmount} // Bind the input field with withdrawAmount state
            onChange={(e) => setWithdrawAmount(e.target.value)} // Update withdrawAmount state when the input changes
            InputProps={{
              style: {
                color: 'white',
                border: '10px solid #green',
                borderRadius:'25px',
                fontFamily:'myFirstFont',
                fontSize: '1.5vw'

              },
               
            }}
            InputLabelProps={{
              style: { color: 'white' },           
          }}
            
          />
          <Button
        style={{
          fontSize: '18px',
          fontWeight: '100',
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#1D9A3C',
          margin: '0',
          width: '40%',
          height: '8vh',
          borderRadius: '25px',
          fontFamily: 'inherit',
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Submit
      </Button>

      <Modal style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center'}} open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className='modal-content'>
          <TextField
            InputProps={{ style: { color: 'black', fontFamily: 'myFirstFont', backgroundColor: 'white' , borderRadius: '20px' } }} // Set text color to white
            InputLabelProps={{ style: { color: 'black', fontFamily: 'myFirstFont', backgroundColor: 'white' } }}
            variant='outlined'
            placeholder='Enter Paypal or Paytm ID'
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            fullWidth
            margin='normal'
          />
          <TextField
          InputProps={{ style: { color: 'black', fontFamily: 'myFirstFont', backgroundColor: 'white', borderRadius: '20px' } }} // Set text color to white
          InputLabelProps={{ style: { color: 'black', fontFamily: 'myFirstFont', backgroundColor: 'white' } }}
            variant='outlined'
            placeholder='Enter Withdrawal Amount'
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            fullWidth
            margin='normal'
          />
          <Button
            variant='contained'
            style={{
              marginTop: '20px',
              fontSize: '18px',
              fontWeight: '100',
              color: 'white',
              textAlign: 'center',
              backgroundColor: '#1D9A3C',
              width: '100%',
              borderRadius: '25px',
            }}
            onClick={handleWithdrawalSubmit}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
        <Box
         className = 'pixel2'
         fontFamily= 'inherit'

      >
        Amount Processed
        </Box> 
      
        <div style={{
          display:'flex',
          justifyContent: 'center',
          // border: '3px solid',
          marginLeft: '25px',
          marginRight:'15%',
          fontFamily: 'myFirstFont'

        }}>
          {/* <Button variant='contained'
          
            style={{
              fontSize: '18px',                                      
               fontWeight: '100',
               color: 'Black',
               textAlign: 'center',
               backgroundColor: '#FFD100',
               margin: '0',
               width: '40%',
               height: '5vh',
               borderRadius:'25px',
               fontFamily:'inherit'

            }}
          >
    Add Money
  </Button> */}
          <Button
            style={{
              fontSize: '18px',
               
               fontWeight: '100',
               color: 'white',
               textAlign: 'center',
               backgroundColor: '#1D9A3C',
               margin: '0',
               width: '40%',
                     height: '5vh',
               borderRadius:'25px',
               fontFamily: 'inherit'

          }}
          onClick={handleButtonClick}
          >
     Back to game
  </Button>
</div> 

    </Box> 
    {errorMessage && (
        <Box style={{ marginTop: '20px', color: 'red', fontFamily: 'myFirstFont' }}>
          {errorMessage}
        </Box>
      )} 
  </Box>
  )
}
