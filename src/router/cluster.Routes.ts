const clusterRoute = require('express').Router()
import { addClusterHandler, changeClusterConditionHandler, deleteClusterHandler, getClusterHandler, updateClusterHandler } from "../controller/cluster.controller"
import validateAll, {  validateToken  } from "../middleware/validator"
import { roleValidator } from "../middleware/roleValidator"
import { allSchemaId } from "../schemas/allSchema"
import { clusterSchema } from "../schemas/cluster.schema"

clusterRoute.get("/admin" ,validateToken,roleValidator('admin'),  getClusterHandler)
clusterRoute.delete("/" ,validateToken,roleValidator('admin'), deleteClusterHandler)
clusterRoute.post("/" ,validateToken, roleValidator('admin') , validateAll(clusterSchema), addClusterHandler)


clusterRoute.get("/" , validateToken, validateAll(allSchemaId) , getClusterHandler)
clusterRoute.patch("/admin" ,validateToken,validateAll(allSchemaId), roleValidator("admin"), updateClusterHandler)

clusterRoute.patch("/" ,validateToken,validateAll(allSchemaId), changeClusterConditionHandler)



export default clusterRoute