import { deleteUserLogHandler, getUserLogHandler } from "../controller/userLog.controller"
import { roleValidator } from "../middleware/roleValidator"
import { validateToken } from "../middleware/validator"

const userLogRoute = require('express').Router()

userLogRoute.get("/" , validateToken, roleValidator('admin') ,getUserLogHandler)

userLogRoute.delete("/" ,validateToken, roleValidator('admin') , deleteUserLogHandler)

export default userLogRoute
 