import {boolean, object , string} from "zod"

export const deviceSchema = object({
    body : object({
        name : string({
            required_error : "name is required"
        }),
        deviceId : string({
            required_error :"device id is require"
        }),
        serialNo : string({
            required_error :"serial id is require"
        }),
    })
})

// export const deviceUpdateSchema = object({
//     body : object({
//         mode : string({
//             required_error : "mode is required"
//         }),
//         topic : string({
//             required_error : "topic is required"
//         })
//     })
// })

