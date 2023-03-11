import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Container, Typography, TextField, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState , useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function StartRide() {
    const [startPoint, setstartPoint] = React.useState('');
    const [endpoint, setendpoint] = React.useState('');
    // const handleChange = (event) => {
    //     setstartPoint(event.target.value);

    // };
    // const handleChange1 = (e) => {
    //     setendpoint(e.target.value);
    // }

    // const clickedme =()=>{
    //     console.log("you clicked me")
    // }
    let [ridesavailable, setridesavailable] = useState([]);
    // const navigate= useNavigate()
    // useEffect(()=>{
    //   axios.get('http://127.0.0.1:9090/api/v1/getAllRides').then(payload =>{
    //     setridesavailable(payload.ridesavailable)
    //   }).catch(error => console.log(error))
    // })
   
    useEffect(() => {
      fetch('http://127.0.0.1:9090/api/v1/getAllRides')
      .then(result => result.json())
        .then(resp => setridesavailable(resp.dataObtain))
        .catch(error=>console.error(error));
    }, []);
    const [formData, setFormData] = useState({
        RideId: '',
        StartPoint: '',
        EndPoint:'',
        Date: '',
        Time: '',
        RideShareCoins:'',
        Distance:''
      })
    
      const navigate = useNavigate();
      const handleSubmit = () => {
        console.log("button clicked");
        console.log(formData)
        axios.post("http://localhost:9090/api/v1/joinRide", { ...formData }).then(function (response) {
          console.log(response);
          alert("You Have Successfully become a part of the Ride")
        }).catch(function (error) {
          console.log(error);
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
        
      };
    
      const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
      }
    

    return (
        <Container>
      <Typography variant="h5" mt={4}>Join the Ride</Typography>
      <Typography variant="body1">Fill in the details to Join the ride </Typography>
      {/* <TextField
        name="RideId"
        label="RideId"
        value={ridesavailable.map(item=>{item.RideId})}
        // onChange={handleChange}
        required
        fullWidth
        margin="normal"
      /> */}
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
      {/* <TextField
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
      /> */}
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
        label="RideShareCoins"
        name='RideShareCoins'
        value={formData.RideShareCoins}
        onChange={handleChange}
        type="RideShareCoins"
        required
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
            {/* <TextField
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
      /> */}
      <Button type="button" onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 4 }}>Submit</Button>
      <Link to="/rides"><Button variant="outlined" color="primary" sx={{ mt: 4, ml: 2 }}>Cancel</Button></Link>
    </Container>
    )
}