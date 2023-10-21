import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const PaymentModal = ({ isOpen, onClose, onSubmit }) => {
  const [paymentId, setPaymentId] = useState('');

  const handleSubmit = () => {
    onSubmit(paymentId);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <TextField
          variant='outlined'
          placeholder='Enter Payment ID'
          value={paymentId}
          onChange={(e) => setPaymentId(e.target.value)}
        />
        <Button variant='contained' onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
