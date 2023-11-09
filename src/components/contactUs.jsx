import React from 'react';
import { Box } from '@mui/material';
import { useUser } from '../services/useContext';

export default function Contact() {
  const { userData } = useUser();

  if (!userData) {
    return <div></div>;
  }

  const faqContainerStyle = {
    fontFamily: 'myFirstFont',
    width: '100%',
    margin: '30px',
    borderRadius: '30px',
    padding: '30px',
    backgroundColor: '#00350E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const mobileFaqContainerStyle = {
    ...faqContainerStyle,
  };

  const questionStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '10px',
    maxWidth: '100%',
    wordWrap: 'break-word',
  };

  const answerStyle = {
    fontSize: '0.8rem',
    color: 'white',
    marginBottom: '20px',
    maxWidth: '100%',
    wordWrap: 'break-word',
  };

  return (
    <Box className='pixel1' style={faqContainerStyle} sx={{ '@media (max-width: 600px)': mobileFaqContainerStyle }}>
        <div style={{display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
      <div style={questionStyle}>
        <h1>Contact Us</h1>
      </div>
      <div style={answerStyle}>
        <h2>
          Have questions or concerns? Feel free to reach out to us! Our dedicated support team is here to assist you. For all inquiries, please email us at{' '}
          <a style={{color: "#FFD100"}} href="mailto:jeremy@zodiak.games">jeremy@zodiak.games</a>.
        </h2>
      </div>
      </div>
    </Box>
  );
}
