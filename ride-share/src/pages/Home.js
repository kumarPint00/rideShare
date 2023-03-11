import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HailIcon from '@mui/icons-material/Hail';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {



  return (
    <Container maxWidth="md" color='secondary'>

      <Typography variant="h3" mt={2} component="h4" align='centre' noWrap='true' >Welcome to our Ride-Sharing Dapp</Typography>


      <Grid container spacing={2}>
        <Grid item sm={5} container spacing={4} sx={{
          mt: 4,
          backgroundColor: 'gray',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
          display: 'inline-block',
          padding: '16px'
        }}>
          <Box>
            <Item>
              <HailIcon fontSize='large'/>
              <Typography variant="h4" align='centre' mt={4}>

                Book My Ride
              </Typography>

              <Link to="/rides">
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Find a Rides
                </Button>
              </Link>
            </Item>
          </Box>
        </Grid>
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid item sm={6}  sx={{
            mt: 4,
            backgroundColor: 'gray',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            display: 'inline-block',
            padding: '16px'
          }}>
            <Item>

              <Typography variant="h4" align='Centre' mt={4}>
                Share My Ride
              </Typography>
              <Link to="/NewRide" >
                <Container>
                  <Button size='large' variant="contained" color="primary" >
                    Offer a Ride
                  </Button>
                </Container>
              </Link>

            </Item>

          </Grid>

        </Box> */}
        <Grid item sm={2}></Grid>
<Grid item sm={5} container spacing={2} sx={{
          mt: 4,
          backgroundColor: 'gray',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
          display: 'inline-block',
          padding: '16px'
        }}>
          <Box>
            <Item>
              <GroupsIcon fontSize='large'/>
              <Typography variant="h4" align='centre' mt={4}>
              Share My Ride
              </Typography>

              <Link to="/NewRide">
                <Button variant="contained" sx={{ mt: 2 }}>
                Offer a Ride
                </Button>
              </Link>
            </Item>
          </Box>
        </Grid>

      </Grid>

      <Typography variant="h3" mt={4}> </Typography>

    </Container>
  );
}

export default Home;
