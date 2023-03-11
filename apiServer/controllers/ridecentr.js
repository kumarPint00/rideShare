const {RideModelcentr} = require('../models/models');

exports.ridecentr=async(req,res)=>{

    try{
        console.log(req.body);
        const rideModelcentr = await RideModelcentr.create(req.body);

        console.log(req.body);
                res.status(200).json({
                    message: 'Ride Modelcentr created successfully',
                    ride: rideModelcentr
                });
            }catch(err){
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving data'
        });
    
    }
}
exports.getRidecntr=async (req,res)=>{
    try{
        const rides= await RideModelcentr.find();

        res.status(200).json({
            message: 'Ride Modelcentr Fetched successfully',
            ride: rides
        });
    }catch(err){
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving data'
        });
    
}}

exports.getRidebyId =async(req,res)=>{
    try{
        const ride = await RideModelcentr.findOne({RideId:req.params})

        res.status(200).json({
            message: 'Ride Modelcentr Fetched successfully',
            ride: ride
        });
    }catch(err){
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving data'
        });
    
}}

exports.joinRide = async(req, res)=>{
    try{
        const{data}=req.body;
        const ride = await RideModelcentr.UpdateOne({RideId:req.body.RideId},{$set:data})

        const getRide = await RideModelcentr.find();

        res.status(200).json({
            message: 'Ride Modelcentr Updated successfully',
            ride: getRide
        });
    }catch(err){
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving data'
        });
}}