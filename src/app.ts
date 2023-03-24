import express ,{NextFunction , Request , Response } from "express";
import mongoose from "mongoose";
import config from "config"
import userRoute from "./router/user.Routes";
import fileUpload from "express-fileupload";
import permitRoute from "./router/permit.Routes";
import roleRoute from "./router/role.Routes";
import clusterRoute from "./router/cluster.Routes";
import deviceRoute from "./router/device.Routes";
import mqtt from "mqtt"
import swaggerjsdoc from "swagger-jsdoc"
import swaggerUi from  "swagger-ui-express"
import userLogRoute from "./router/userLog.Routes";
import { updateDeviceBySerialNo } from "./service/device.service";
import { clusterUpdateBySerialNo } from "./service/cluster.service";
import cors from 'cors'

const app  = express()
app.use(express.json())
app.use(fileUpload())
app.use(cors({origin: '*'}))
const server = require('http').createServer(app)


const port = config.get<number>("port")
const host = config.get<string>("host")
const dbUrl = config.get<string>('dbUrl')

mongoose.connect(dbUrl)
export const client = mqtt.connect('mqtts://7cb0bb03390b413ca6ebc8bf5bf63014.s2.eu.hivemq.cloud', {
  username: 'lmo-12',
  password: 'mindin4580',
});

let sub_topic = "general";

const connect = () =>{
  client.subscribe("#",  { qos: 0 } , function (err) {
      if (err) {
        console.log("An error occurred while subscribing");
      } else {
        console.log("Subscribed successfully to " + sub_topic.toString());
      }
    });
}

client.on("connect",connect);

client.on("message", async (topic , message)=>{

  console.log(topic , '///' , message.toString()) 
  
  let income = topic+'/'+message.toString()

  //reseive data from device

  let arr = topic.split("/")

  if(arr[0] === 'spdm' && arr[2] == 'device' && arr[3] == 'mode'){
    updateDeviceBySerialNo(arr[1] , {mode : message.toString()} ,  income)
  }

  if(arr[0] === 'spdm' && arr[2] == 'device' && arr[3] != 'mode'){
    if(arr[3] == 'state' || arr[3] == 'data' ){
      return console.log('state conditon')
    }

      clusterUpdateBySerialNo(arr[1] , arr[3] ,  message.toString())
  }
});



//doc

const option : {} = {
  definition : {
    openapi : "3.0.0",
    info : {
      title : "DET API Documentation",
      version : "0.1",
      description : "This api used nodejs version 18.15.0 and made with Express"
    },
    servers : [
      {
        url : `http://${host}:${port}`
      }
    ]
  },
  apis : ["./src/doc/*.ts"]
}


const spacs = swaggerjsdoc(option)

app.use("/api-docs" , swaggerUi.serve , swaggerUi.setup(spacs))

app.get('/' , (req : Request , res : Response , next : NextFunction)=>{
  res.send("ok")
})

app.use("/user" , userRoute)
app.use("/permit" , permitRoute)
app.use("/role" , roleRoute)
app.use('/cluster' , clusterRoute)
app.use('/device' , deviceRoute )
app.use('/userlog' , userLogRoute)

app.use((err :any , req :Request , res :Response , next :NextFunction) => {
  err.status = err.status || 409;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
})



server.listen(port, ()=> console.log(`server is running in  http://${host}:${port}`))
