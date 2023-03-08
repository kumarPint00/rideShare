import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Rides from './Components/Rides';
import { Link, Button } from '@mui/material';


const theme = createTheme();

function App() {
  return (
    
    <ThemeProvider theme={theme}>
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/rides" element={<Rides/>} />
        </Routes>
      </Router>

      {/* <Link to="/rides">
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          View Rides
        </Button>
      </Link> */}
    </ThemeProvider>
  );
}

export default App;
