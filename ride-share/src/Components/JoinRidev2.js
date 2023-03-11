import React, { useState, useEffect } from 'react';

export default function JoinRidePage() {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seats, setSeats] = useState('');

  // Fetch the list of available rides from the server when the page loads
  useEffect(() => {
    fetch('/rides')
      .then(response => response.json())
      .then(data => setRides(data))
      .catch(error => console.error(error));
  }, []);

  const handleJoinRide = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send a request to the server to join the selected ride
    fetch(`/rides/${selectedRide.id}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, seats })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully joined ride:', data);
        // Optionally update the UI to indicate that the user has joined the ride
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Join a ride</h1>
      <p>Select a ride from the list below, then enter your name, email, and the number of seats you need.</p>

      <form onSubmit={handleJoinRide}>
        <label htmlFor="ride-select">Select a ride:</label>
        <select id="ride-select" value={selectedRide?.id} onChange={(event) => setSelectedRide(rides.find(ride => ride.id === parseInt(event.target.value)))}>
          <option value="">-- Select a ride --</option>
          {rides.map(ride => (
            <option key={ride.id} value={ride.id}>{ride.driverName}'s ride from {ride.origin} to {ride.destination}</option>
          ))}
        </select>

        <label htmlFor="name-input">Name:</label>
        <input id="name-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="email-input">Email:</label>
        <input id="email-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="seats-input">Number of seats:</label>
        <input id="seats-input" type="number" min="1" max={selectedRide?.seatsAvailable} value={seats} onChange={(event) => setSeats(event.target.value)} />

        <button type="submit" disabled={!selectedRide || !name || !email || !seats}>Join ride</button>
      </form>
    </div>
  );
}
