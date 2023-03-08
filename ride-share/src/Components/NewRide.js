import React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NewRide() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement ride offer submission logic
  };

  return (
    <Container>
      <Typography variant="h1">Offer a Ride</Typography>
      <Typography variant="body1">
        Fill in the details to create a new ride offer.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Origin"
          value={origin}
          onChange={handleOriginChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Destination"
          value={destination}
          onChange={handleDestinationChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          value={date}
          onChange={handleDateChange}
          type="date"
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Time"
          value={time}
          onChange={handleTimeChange}
          type="time"
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
          Submit
        </Button>
        <Link to="/rides">
          <Button variant="outlined" color="primary" sx={{ mt: 4, ml: 2 }}>
            Cancel
          </Button>
        </Link>
      </form>
    </Container>
  );
}

export default NewRide;
