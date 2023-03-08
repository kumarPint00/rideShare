const router = require('express').Router()
const passport = require('passport')

const ride= require('../controllers/ride');

router.post('/createRide',ride.createRide);
router.post('/joinRide', ride.joinRide);


module.exports = router