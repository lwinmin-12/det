import { getRoleHandler , addRoleHandler, deletRoleHandler, roleAddPermitHandler , roleRemovePermitHandler } from "../controller/role.controller"
import { roleValidator } from "../middleware/roleValidator"
import validateAll, { validateToken } from "../middleware/validator"
import { allSchemaId } from "../schemas/allSchema"
import { rolePermitSchema, roleSchema } from "../schemas/role.schema"

const roleRoute = require("express").Router()

roleRoute.get("/" ,validateToken, roleValidator('admin') , getRoleHandler)

// roleRoute.post("/", validateToken, validateAll(roleSchema), roleValidator('admin') , addRoleHandler)

//that is testing route
roleRoute.post("/", validateAll(roleSchema) , addRoleHandler)


roleRoute.delete("/" ,validateToken, roleValidator('admin') , validateAll(allSchemaId),deletRoleHandler)

roleRoute.patch("/add/permit" ,validateToken, roleValidator('admin'), validateAll(rolePermitSchema) , roleAddPermitHandler)

roleRoute.patch("/remove/permit" ,validateToken, roleValidator('admin') , validateAll(rolePermitSchema) , roleRemovePermitHandler)

export default roleRoute