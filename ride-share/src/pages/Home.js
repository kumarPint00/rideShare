import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NewRide from '../Components/NewRide';

function Home() {
  return (
    <Container>
      <Typography variant="h4">Welcome to our Ride-Sharing Dapp</Typography>
      <Typography variant="body1">
        Find a ride or offer a ride to your destination.
      </Typography>
      {/* <Link to="/NewRide" > */}
        <a><NewRide/></a>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          View Rides
        </Button>
      {/* </Link> */}
    </Container>
  );
}

export default Home;
