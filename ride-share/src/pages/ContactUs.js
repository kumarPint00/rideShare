import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement contact form submission logic
  };

  return (
    <Container>
      <Typography variant="h1">Contact Us</Typography>
      <Typography variant="body1">
        If you have any questions, comments, or feedback, please use the form below to contact us.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          value={message}
          onChange={handleMessageChange}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ContactUs;

