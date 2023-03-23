import { addDeviceHandler, changeDeviceModeHandler, deleteDeviceHandler, deviceAddClusterHandler, deviceRemoveClusterHandler, getDeviceHandler, updateDeviceHandler } from "../controller/device.controller"
import { roleValidator } from "../middleware/roleValidator"
import validateAll, { validateToken } from "../middleware/validator"
import { allSchemaId } from "../schemas/allSchema"
import { deviceSchema } from "../schemas/device.schema"

const deviceRoute = require('express').Router()

deviceRoute.get("/" , validateToken, validateAll(allSchemaId) ,getDeviceHandler)
deviceRoute.patch("/" , validateToken , validateAll(allSchemaId) , changeDeviceModeHandler)

deviceRoute.patch('/admin' , validateToken, roleValidator('admin') ,validateAll(allSchemaId) , updateDeviceHandler)
deviceRoute.get('/admin', validateToken , roleValidator('admin') , getDeviceHandler)
deviceRoute.post('/', validateToken , roleValidator('admin') , validateAll(deviceSchema), addDeviceHandler)
deviceRoute.delete('/',validateToken , roleValidator('admin') , deleteDeviceHandler)


deviceRoute.patch('/add/cluster',validateToken , roleValidator('admin') , deviceAddClusterHandler)
deviceRoute.patch('/remove/cluster',validateToken , roleValidator('admin') , deviceRemoveClusterHandler)

export default deviceRoute
