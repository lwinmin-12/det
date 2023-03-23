import {object , string} from 'zod'

export const permitSchema = object({
    body : object({
        name : string({
            required_error : "name is required"
        })
    })
})