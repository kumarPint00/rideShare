import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h1">About</Typography>
      <Typography variant="body1">
        This is a ride-sharing DApp built using React and Material-UI. It allows users to create ride offers and find rides that match their needs. The DApp is built on top of the Ethereum blockchain, using the Solidity smart contract programming language to handle the creation and management of ride offers.
      </Typography>
      <Typography variant="body1">
        The goal of this DApp is to provide a decentralized, peer-to-peer solution for ride sharing that is secure, transparent, and cost-effective. By using blockchain technology to facilitate transactions and maintain records, we hope to create a more efficient and equitable system for ride sharing that benefits both riders and drivers.
      </Typography>
    </Container>
  );
}

export default About;
