const { CustomError } = require("./HandleResponseError");
const { CHAINCODE_NAMES } = require("./helper");


const Ride_SCHEMA = [
  { "name": "Id" },
  { "name": "CreatedOn" },
  { "name": "CreatedBy" },
  { "name": "IsDelete" },
  { "name": "IsProcessed" },
  { "name": "RideId" },
  { "name": "StartPoint" },
  { "name": "EndPoint" },
  { "name": "Stopage1" },
  { "name": "Stopage2" },
  { "name": "Stopage3" },
  { "name": "Stopage4" },

];


exports.getSchema = (chaincodeName) => {
  switch (chaincodeName) {
    case CHAINCODE_NAMES.RIDE:
      return Ride_SCHEMA;
   

    default:
      throw new CustomError({
        code: 404,
        message: `Schema for chaincodename : ${chaincodeName} does not exists`,
      });
  }
};
