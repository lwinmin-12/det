import { getPermitHandler , addPermitHandler, deletPermitHandler} from "../controller/permit.controller"
import validateAll, { validateToken } from "../middleware/validator"
import { permitSchema } from "../schemas/permit.schema"
import { allSchemaId } from "../schemas/allSchema"
import { roleValidator } from "../middleware/roleValidator"
const permitRoute = require('express').Router()

permitRoute.get('/' , validateToken, roleValidator('admin') , getPermitHandler)
permitRoute.post('/' , validateToken, roleValidator('admin') ,validateAll(permitSchema) , addPermitHandler)
permitRoute.delete('/' , validateToken, roleValidator('admin') , validateAll(allSchemaId) , deletPermitHandler)

export default permitRoute
