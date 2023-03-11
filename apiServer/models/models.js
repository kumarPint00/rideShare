const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RideModel = new schema({
    RideId: String,
    StartPoint: String,
    EndPoint: String,
    Date:String,
    Time:String,
    RideShareCoins:String,
    Distance:String


}, { timestamps: true });

const RideModelcentr = new schema({
    RideId: String,
    StartPoint: String,
    EndPoint: String,
    Date:String,
    Time:String,
    RideShareCoins:String,
    Distance:String

})


module.exports = mongoose.model('RideModel', RideModel);
module.exports = mongoose.model('RideModelcentr', RideModelcentr);

