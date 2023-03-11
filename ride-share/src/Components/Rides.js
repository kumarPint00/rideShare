import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

const handleActionClick = () => {
  console.log("You click me")
}




function Rides() {
  let [ridesavailable, setridesavailable] = useState([]);
  const navigate= useNavigate()
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
  console.log("ridesavailable"+JSON.stringify(ridesavailable));
  return (
    <div>
      <TableContainer component={Paper}>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>RideId</TableCell>
              {/* <TableCell>IsProcessed</TableCell> */}
              <TableCell>StartPoint</TableCell>
              <TableCell>EndPoint</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>RideShareCoins</TableCell>
              <TableCell>Distance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ridesavailable.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.RideId}</TableCell>
                {/* <TableCell>{item.IsProcessed}</TableCell> */}
                <TableCell>{item.StartPoint}</TableCell>
                <TableCell>{item.EndPoint}</TableCell>
                <TableCell>{item.Date}</TableCell>
                <TableCell>{item.Time}</TableCell>
                <TableCell>{item.RideShareCoins}</TableCell>
                <TableCell>{item.Distance}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() =>navigate('/joinride') }>Book Ride</Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}

export default Rides;
