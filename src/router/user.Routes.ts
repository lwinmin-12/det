const userRoute = require('express').Router()
import { deleteUserHandler,  getUserHandler, loginUserHandler, registerUserHandler, userAddDeviceHandler, userAddPermitHandler, userAddRoleHandler, userRemoveDeviceHandler, userRemovePermitHandler, userRemoveRoleHandler } from "../controller/user.controller"
import { roleValidator } from "../middleware/roleValidator"
import validateAll, { validateToken } from "../middleware/validator"
import { allSchemaId } from "../schemas/allSchema"
import { addDeviceSchema, createUserSchema, loginUserSchema } from "../schemas/user.schema"

userRoute.post("/register", validateAll(createUserSchema) , registerUserHandler)
userRoute.post("/login" ,  validateAll(loginUserSchema), loginUserHandler);

userRoute.get('/admin' , validateToken, roleValidator('admin') ,getUserHandler)
userRoute.get("/" , validateToken , validateAll(allSchemaId) ,getUserHandler)

//beware deleting all user route
userRoute.delete('/admin' , validateToken , roleValidator('admin') , deleteUserHandler)

//delete each user
userRoute.delete("/" , validateToken ,  validateAll(allSchemaId), deleteUserHandler)

//adding role in user
userRoute.patch('/add/role', validateToken, roleValidator('admin') , userAddRoleHandler)
userRoute.patch('/remove/role', validateToken, roleValidator('admin') , userRemoveRoleHandler)

//adding permit in user
userRoute.patch("/add/permit", validateToken, roleValidator('admin') , userAddPermitHandler)
userRoute.patch('/remove/permit', validateToken, roleValidator('admin') , userRemovePermitHandler)


//adding device in user
userRoute.patch('/add/device',validateToken, validateAll(addDeviceSchema) , userAddDeviceHandler)
userRoute.patch('/remove/device' , validateToken ,  validateAll(addDeviceSchema) , userRemoveDeviceHandler)
export default userRoute
