import React from "react";
import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MobileDatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { margin } from "@mui/system";
// import { startride, joinRide } from '../api/Api';
// import  useHistory  from "react-router-dom";
const root = {
	baseUrl: "http://localhost:9090/api/v1/",
};
const endPoints = {
	createRide: "createRide",
	joinRide: "joinRide",
	ridecentre: "ridecentre",
};

function NewRide() {
	const [formData, setFormData] = useState({
		RideId: "",
		StartPoint: "",
		EndPoint: "",
		Date: "",
		Time: "",
		RideShareCoins: "",
		Distance: "",
	});
	const [count, setCount] = useState(0);
	const navigate = useNavigate();
	const handleSubmit = () => {
		console.log("button clicked");
		console.log(formData);
		axios
			.post("http://localhost:9090/api/v1/createRide", { ...formData })
			.then(function (response) {
				console.log(response);
				alert("Your Ride Created Successfully");
			})
			.catch(function (error) {
				console.log(error);
			});
		setTimeout(() => {
			navigate("/");
		}, 2000);
	};

	const handleRender = () => {
		setCount(count + 1);
	};

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleFieldChange = (field, newDate) => {
		setFormData((prevState) => ({
			...prevState,
			[field]: newDate,
		}));
	};

	return (
		<Container>
			<Typography variant="h5" mt={4}>
				Offer a Ride
			</Typography>
			<Typography variant="body1">
				Fill in the details to create a new ride offer
			</Typography>
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
			<MobileDatePicker
				label="Date"
				name="Date"
				value={dayjs(formData.Date)}
				onChange={(val) => handleFieldChange("Date", val)}
				maxDate={dayjs("2045-12-31")}
				disablePast
				sx={{ width: "100%", mt: (theme) => theme.spacing(2) }}
			/>
			<MobileTimePicker
				label="Time"
				name="Time"
				value={dayjs(formData.Time)}
				onChange={(val) => handleFieldChange("Time", val)}
				sx={{ width: "100%", mt: (theme) => theme.spacing(2) }}
			/>
			{/* <TextField
				label="Date"
				name="Date"
				value={formData.Date}
				InputProps={{
					inputProps: {
						min: new Date().toJSON().slice(0, 10),
						max: "2045-12-31",
					},
				}}
				onChange={handleChange}
				type="Date"
				required
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
			/> */}
			{/* <TextField
				label="Time"
				name="Time"
				value={formData.Time}
				onChange={handleChange}
				type="Time"
				required
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
			/> */}
			<TextField
				label="RideShareCoins"
				name="RideShareCoins"
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
			<TextField
				label="Distance"
				name="Distance"
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
			<Button
				type="button"
				onClick={handleSubmit}
				variant="contained"
				color="primary"
				sx={{ mt: 4 }}
			>
				Submit
			</Button>
			<Link to="/rides">
				<Button variant="outlined" color="primary" sx={{ mt: 4, ml: 2 }}>
					Cancel
				</Button>
			</Link>
		</Container>
	);
}

export default NewRide;
