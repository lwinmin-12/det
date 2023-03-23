import {object , string} from "zod"

export const clusterSchema = object({
    body : object({
        name : string({
            required_error : "name is required"
        }),
        status : string({
            required_error : "status is required"
        }),
        condition : string({
            required_error : "conditon is required"
        }),
        clusterSerialNo : string({
            required_error : "cluster serial number is required"
        })
    })
})