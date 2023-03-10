import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {



  return (
    <Container maxWidth="md" color='secondary'>

      <Typography variant="h3" mt={2} component="h4" align='centre' noWrap='true'>Welcome to our Ride-Sharing Dapp</Typography>
      <Typography variant="body1" align='centre' mt={4}>
        Choose from the list of available rides
      </Typography>

      <Link to="/rides">
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Find a Rides
        </Button>
      </Link>
      <Typography variant="h3" mt={4}> Offer a Ride</Typography>
      <Typography variant="body1" mt={4}>
        create your own ride offer.
      </Typography>
      <Link to="/NewRide" >
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Offer a Ride
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
