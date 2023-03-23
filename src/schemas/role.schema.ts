import {object , string} from 'zod'

export const roleSchema = object({
    body : object({
        name : string({
            required_error : "name is required"
        }),
    })
})

export const rolePermitSchema = object({
    body : object({
        roleId :  string().regex(/^[0-9a-fA-F]{24}$/ , "invlid id"),
        permitId :  string().regex(/^[0-9a-fA-F]{24}$/ , "invlid id")
    })
})