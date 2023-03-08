const {RideModelcentr} = require('../models/models');

exports.ridecentr=(req,res)=>{

    try{
        const rideModelcentr = new RideModelcentr(req.body);

        rideModelcentr.save()
            .then(ride => {
                res.status(200).json({
                    message: 'Ride Modelcentr created successfully',
                    ride: ride
                });
            })
            }catch(err){
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving data'
        });
    
    }
}