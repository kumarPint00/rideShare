const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RideModel = new schema({
    RideId: String,
    StartPoint: String,
    EndPoint: String,
    Date:String,
    Time:String,
    Amount:String,
    Distance:String


}, { timestamps: true });

const RideModelcentr = new schema({
    Origin:String,
    Destination:String,
    Date:String,
    Time:String,
    Distance:String,
    Duration:String,
    RideId:String,

})


module.exports = mongoose.model('RideModel', RideModel);
module.exports = mongoose.model('RideModelcentr', RideModelcentr);

