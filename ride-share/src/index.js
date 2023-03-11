
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar'

import Sidebar from './Components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Sidebar/>
    {/* <Navbar/> */}
    <App />
    {/* <Navbar/> */}
  </React.StrictMode>
);

