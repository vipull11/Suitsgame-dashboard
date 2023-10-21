import React, { useState } from 'react'
import { Box  } from '@mui/material';
 
import '../style/style.css';

import LeftSideBar from './LeftSideBar';
import NavBar from './NavBar';
import Account from './Account';
import Payment from './Payment';
import Faq from './faq';

export default function Home() {
    const [isAccount, setAccount] = useState(1);
 

    return (
        <Box
            display='flex'
            flexDirection='column'
         
            
            sx={{
                fontFamily: 'myFirstFont',
                minHeight: '100%',
                minWidth: '100%',
                background: 'linear-gradient(to right bottom, #0C6121, #01370F)',
              
                height: '100vh',
                overflow: 'auto',
            }}
            
            fontFamily= 'myFirstFont'
            >
            <NavBar/>

            <Box
                fontFamily= 'myFirstFont'

                display='flex'
                flexDirection='row'
            >
                <LeftSideBar setAccount={setAccount} />
                 {isAccount === 1 && <Account />}
                {isAccount === 0 && <Payment />}
                 {isAccount === 2 && <Faq />}
                
            </Box>
        </Box>
    )
}
