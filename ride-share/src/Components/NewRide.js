import React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'

function NewRide() {

  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    time: '',
  })

  const handleSubmit = () => {
    console.log("button clicked");
    console.log(formData)
    axios.post('/save-form-data', { ...formData }).then(function (response) {
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
        name="origin"
        label="Origin"
        value={formData.origin}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name='date'
        value={formData.date}
        InputProps={{ inputProps: { min: new Date().toJSON().slice(0, 10), max: "2045-12-31" } }}
        onChange={handleChange}
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
        name='time'
        value={formData.time}
        onChange={handleChange}
        type="time"
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
