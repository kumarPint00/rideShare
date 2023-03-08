const router = require('express').Router()
const passport = require('passport')

const ride= require('../controllers/ride');
const ridecentre = require('../controllers/ridecentr')

router.post('/createRide',ride.createRide);
router.post('/joinRide', ride.joinRide);

router.post('/ridecentre', ridecentre.ridecentr)


module.exports = router