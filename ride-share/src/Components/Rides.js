import React, {useEffect, useState} from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

function Rides() {
  const [data , setData] = useState([]);

  useEffect(()=>{
    axios.get('http://127.0.0.1:9090/api/v1/getAllRides').then(payload =>{
      setData(payload)
    }).catch(error => console.log(error))
  })
  return (
   <div>
    <TableContainer component = {Paper}>

      <Table>
        <TableHead>
          <TableRow>
          <TableCell>RideId</TableCell> 
          <TableCell>IsProcessed</TableCell>
          <TableCell>StartPoint</TableCell>
          <TableCell>EndPoint</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Distance</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index)=>(
            <TableRow key={index}>
              <TableCell>{item.RideId}</TableCell>
              <TableCell>{item.IsProcessed}</TableCell>
              <TableCell>{item.StartPoint}</TableCell>
              <TableCell>{item.EndPoint}</TableCell>
              <TableCell>{item.Date}</TableCell>
              <TableCell>{item.Time}</TableCell>
              <TableCell>{item.Amount}</TableCell>
              <TableCell>{item.Distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   </div>
  );
}

export default Rides;
