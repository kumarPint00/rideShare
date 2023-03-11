const router = require('express').Router()
const passport = require('passport')

const ride= require('../controllers/ride');
const ridecentre = require('../controllers/ridecentr')

router.post('/createRide',ride.createRide);
router.post('/joinRide', ride.joinRide);
router.get('/getAllRides', ride.getAllRides);

router.post('/ridecentre', ridecentre.ridecentr)

router.get('/createRideCnte', ridecentre.getRidecntr);
router.get('/getoneride/:id', ridecentre.getRidebyId);
router.post('/joinridecrnte', ridecentre.joinRide);

module.exports = router