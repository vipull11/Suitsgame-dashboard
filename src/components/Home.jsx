import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../style/style.css';
import MobileSidebar from './MobileSidebar';
import LeftSideBar from './LeftSideBar';
import NavBar from './NavBar';
import Account from './Account';
import Payment from './Payment';
import Faq from './faq';

export default function Home() {
  const [isAccount, setAccount] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Set your desired breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{
        fontFamily: 'myFirstFont',
        minHeight: '100vh',
        background: 'linear-gradient(to right bottom, #0C6121, #01370F)',
        overflow: 'auto',
      }}
    >
      {isMobileView ? (
        <MobileSidebar setAccount={setAccount} />
      ) : (
        <NavBar />
      )}

      <Box display='flex' flexDirection='row'>
        {isMobileView ? null : <LeftSideBar setAccount={setAccount} />}
        {isAccount === 1 && <Account />}
        {isAccount === 0 && <Payment />}
        {isAccount === 2 && <Faq />}
      </Box>
    </Box>
  );
}
