import React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import { startride, joinRide } from '../api/Api';
const root = {
  baseUrl: "http://localhost:9090/api/v1/",
}
const endPoints = {
  createRide: 'createRide',
  joinRide: "joinRide",
  
}
function NewRide() {

  const [formData, setFormData] = useState({
    RideId: '',
    StartPoint: '',
    EndPoint:'',
    Date: '',
    Time: '',
    Amount:'',
    Distance:''
  })

  const handleSubmit = () => {
    console.log("button clicked");
    console.log(formData)
    axios.post('http://127.0.0.1:9090/api/v1/createRide', { ...formData }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
      <Typography variant="h5" mt={4}>Offer a Ride</Typography>
      <Typography variant="body1">Fill in the details to create a new ride offer</Typography>
      <TextField
        name="RideId"
        label="RideId"
        value={formData.RideId}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="StartPoint"
        name="StartPoint"
        value={formData.StartPoint}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
       <TextField
        label="EndPoint"
        name="EndPoint"
        value={formData.EndPoint}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name='Date'
        value={formData.Date}
        InputProps={{ inputProps: { min: new Date().toJSON().slice(0, 10), max: "2045-12-31" } }}
        onChange={handleChange}
        type="Date"
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Time"
        name='Time'
        value={formData.Time}
        onChange={handleChange}
        type="Time"
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
            <TextField
        label="Amount"
        name='Amount'
        value={formData.Amount}
        onChange={handleChange}
        type="Amount"
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
            <TextField
        label="Distance"
        name='Distance'
        value={formData.Distance}
        onChange={handleChange}
        type="Distance"
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button type="button" onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 4 }}>Submit</Button>
      <Link to="/rides"><Button variant="outlined" color="primary" sx={{ mt: 4, ml: 2 }}>Cancel</Button></Link>
    </Container>
  );
}

export default NewRide;
