import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NewRide from './NewRide';

function Rides() {
  return (
    <Container>
      <Typography variant="h1">Find a Ride or Offer a Ride</Typography>
      <Typography variant="body1">
        Choose from the list of available rides or create your own ride offer.
      </Typography>
      <Link to="/NewRide" >
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Offer a Ride
        </Button>
      </Link>
    </Container>
  );
}

export default Rides;
