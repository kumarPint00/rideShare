require("dotenv").config();
const {RideModel} = require("../models/models");

const {CHAINCODE_ACTIONS, CHAINCODE_NAMES, getNow, CHAINCODE_CHANNEL, generateId}=require('../utils/helper');
const {invokeTransaction}= require('../app/invoke');


exports.createRide = async (req, res) => {
  try {
    console.log("hello")
    const {
      RideId,
      StartPoint,
      EndPoint,
      Stopage1,
      Stopage2,
      Stopage3,
      Stopage4,
   
    }= req.body;
    // console.log('0')
    

      const data ={
        Id: generateId(),
        CreatedOn:getNow(),
        CreatedBy:"admin",
        IsDelete:"false",
        IsProcessed:"false",
        RideId,
        StartPoint,
        EndPoint,
        Stopage1,
        Stopage2,
        Stopage3,
        Stopage4,
      }
      // console.log('1')
      console.log(data)
      // const loandata = await RideModel.create(data);
      console.log('2')
  
      let message = await invokeTransaction({
        metaInfo:{userName:"pintu", org:"org1MSP"},
        chainCodeAction:CHAINCODE_ACTIONS.CREATE,
        channelName:CHAINCODE_CHANNEL,
        data:data,
        chainCodeFunctionName:'create',
        chainCodeName:CHAINCODE_NAMES.RIDE
    })
    console.log("message");
  
      res.status(200).json({
        status:'success',
        message:message
      })

    
  }catch(err){
    res.send("err")
  }
}


exports.joinRide= async (req, res)=>{
  try{
    const {
      RideId,
      StartPoint,
      EndPoint,
    } = req.body;
    console.log(req.body)
    const data ={
      CreatedOn:getNow(),
      CreatedBy:"admin",
      IsDelete:"false",
      IsProcessed:"true",
      RideId,
      StartPoint,
      EndPoint
    }
    console.log(data)
    let query ={ selector :{RideId}}
    console.log(query)

    let queryString = JSON.stringify(query);
    console.log(queryString)
    let dataStr = await invokeTransaction({
      metaInfo:{userName:"pintu", org:"org1MSP"},
      chainCodeAction:CHAINCODE_ACTIONS.GET,
      channelName:CHAINCODE_CHANNEL,
      data:queryString,
      chainCodeFunctionName:'querystring',
      chainCodeName:CHAINCODE_NAMES.RIDE
  })
  console.log(dataStr)

  let dataObtain = JSON.parse(dataStr);

  console.log("separator")
  // console.log(dataObtain);

  dataObtain = dataObtain[0];
// let dataObj= JSON.parse(dataObtain)

  // console.log(dataObj[3])

  // console.log(dataObtain[0])

  // dataObtain.push(data)
  let updateObj = {...dataObtain, ...data}

  console.log(updateObj);
    let message = await invokeTransaction({
      metaInfo: { userName:"pintu", org: "org1MSP" },
      chainCodeAction: "update",
      channelName: "common",
      data: updateObj,
      chainCodeFunctionName: "update",
      chainCodeName:CHAINCODE_NAMES.RIDE
    });
    console.log(message);
    res.status(201).json({
      status: 201,
      message: message
    });

  }catch(err){
    res.status(404).json({
      status:404,
      message:"Not Found"
    });
  }
}
