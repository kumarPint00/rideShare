import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import {Link} from '@mui/material';
import Button from '@mui/material/Button';
export default function StartRide() {
    const [startPoint, setstartPoint] = React.useState('');
    const [endpoint, setendpoint] = React.useState('');
    const handleChange = (event) => {
        setstartPoint(event.target.value);

    };
    const handleChange1 = (e) => {
        setendpoint(e.target.value);
    }

    const clickedme =()=>{
        console.log("you clicked me")
    }


    return (
        <div>
 <Container>
      <Typography variant="h1">Find a Ride or Offer a Ride</Typography>
      <Typography variant="body1">
        Choose from the list of available rides or create your own ride offer.
      </Typography>
      <Link to="/rides/new">
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Offer a Ride
        </Button>
      </Link>
    </Container>
            <Grid container spacing={3}>
                <Grid item xs="3">   

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' component='h4'>Start Ride</Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel>Start Point</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={startPoint}
                                label="Start Point"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Delhi</MenuItem>
                                <MenuItem value={20}>Ghaziabad</MenuItem>
                                <MenuItem value={30}>Noida</MenuItem>
                            </Select>

                        </FormControl>
                    </Box>
                    <Typography variant='h4' component='h4'>End Ride</Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel>End Point</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={endpoint}
                                label="Start Point"
                                onChange={handleChange1}
                            >
                                <MenuItem value={10}>Delhi</MenuItem>
                                <MenuItem value={20}>Ghaziabad</MenuItem>
                                <MenuItem value={30}>Noida</MenuItem>
                            </Select>

                        </FormControl>
                      
                      
                        <Box sx={{ '& button': { m: 2 } }}>
                    <Button onClick={clickedme} spacing='2' variant="contained" >Start the ride</Button>
                    </Box>
                    </Box>
                </Grid>
              
                <Grid item xs>

                </Grid>
            </Grid>
        </div>
    )
}