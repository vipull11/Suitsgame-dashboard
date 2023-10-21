import React from 'react'
import { Box } from '@mui/material';
import coin from '../images/rupees.png';
import '../style/style.css';
import heart from '../images/heart.png';
import chip from '../images/redchip-01.png'
import plus from '../images/plus1.png'
import bg1 from '../images/bg1.jpeg'
import { useUser } from '../services/useContext';
import { useState, useEffect } from 'react';
import Stripe from './stripe';
import Modal from './modal';


export default function NavBar() {
    const { userData } = useUser();
 
        const [showComponent, setShowComponent] = useState(false);
      
        const handleClick = () => {
          setShowComponent(true);
        };
        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => {
          setIsModalOpen(true);
        };
      
        const closeModal = () => {
          setIsModalOpen(false);
        };
      
      

    if (!userData) {
        return <div></div>;
      }

  return (
    
    <div className='main-box'>
        {console.log(userData.data.FullName)}
    <Box
    display='flex'
    alignItems='center'
    color='white'
    fontWeight='bold'
    justifyContent='center'  
>
<div className='box-left'>
<Box

        style={{
            margin: '0'
            
        }}
        display='flex'
        flexDirection='row'
        justifyContent='center'
    >
        
        <Box
            display='flex'
            alignItems='center' // Align items vertically
            justifyContent='center' // Center horizontally
            marginRight='10px'
            
        >
             <img src={chip} alt="Image 1" width='35px' />

       

        </Box>

        <h1 style={{fontSize : '2.5vw'}}>{userData.data.currentCoin}</h1>

      
     <Box
            display='flex'
            alignItems='center' // Align items vertically
            justifyContent='center' // Center horizontally
            marginLeft='10px'
            marginRight='10px'
        >

      <img src={coin} alt="Image 1" width='35px' />

        </Box>

        <h1 style={{fontSize : '2.5vw'}}>{userData.data.totalCash}</h1>

        

        <Box
            display='flex'
            alignItems='center' // Align items vertically
            justifyContent='center' // Center horizontally
            marginLeft='15px'
        >

        <img
        src={plus}
        alt="Image"
        width="35px"
        height="35px"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />
      {isModalOpen && (
        <Modal handleClose={closeModal}>
          <Stripe />
        </Modal>
      )}

        </Box>
    


    </Box>
    </div>

        
    

    <div  className='box-center'>

    <h1
      className='h1tagsuit'
        style={{
            // fontSize: '30px',
            margin: '0',
            fontSize: '3rem',
            fontWeight: '400',
            textShadow: '0 0 10px black',
            marginTop: '1vh', 
     
           
        }}
    >SUITS</h1>


</div>
    <Box
        style={{
            margin: '0'
        }}
        display='flex'
        flexDirection='row'
    >
        <div className='box-right'>
          <div className='box-right-id'>
            <h2
                style={{
                    fontSize: '2rem',
                    margin: '0',
                    fontWeight: '400',
                    color: 'white',
                    fontFamily: 'myFirstFont'

                }}
            >{userData.data.FullName}</h2>
            <h4
                style={{
                    margin: '0',
                    textAlign: 'right',
                    fontFamily: 'myFirstFont'

                }}
            >
               {userData.data._id}

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

        
        </div>

    </Box>

    
    

</Box>
</div>
  )
}
