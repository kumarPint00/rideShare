const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RideModel = new schema({
    RideId: String,
    StartPoint: String,
    EndPoint: String,
    Stopage1:String,
    Stopage2:String,
    Stopage3:String,
    Stopage4:String


}, { timestamps: true });


module.exports = mongoose.model('RideModel', RideModel);

