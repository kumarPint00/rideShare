import React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NewRide() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [formData, setFormData] = useState({
    origin:'',
    destination:'',
    date:'',
    time:'',

  })

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

  const handleSubmit = () => {
    // event.preventDefault();
  
    console.log("button clicked");
    console.log(formData)
    fetch('/save-form-data', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(response=> response.json())
    .then(data=>{
      console.log(data);
      alert("Ride offer submitted successfully");
    })
    .catch(error=>{
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
      <Typography variant="h1">Offer a Ride</Typography>
      <Typography variant="body1">
        Fill in the details to create a new ride offer.
      </Typography>
      {/* <form onSubmit={handleSubmit}> */}
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
        <Button type="Button" onChange={handleSubmit} variant="contained" color="primary" sx={{ mt: 4 }}>
          Submit
        </Button>
        <Link to="/rides">
          <Button variant="outlined" color="primary" sx={{ mt: 4, ml: 2 }}>
            Cancel
          </Button>
        </Link>
      {/* </form> */}
    </Container>
  );
}

export default NewRide;
