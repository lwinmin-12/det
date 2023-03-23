import {object , string} from 'zod'

export const allSchemaId = object({
    query : object({
        _id  : string({
            required_error : "query is required"
        }).regex(/^[0-9a-fA-F]{24}$/ , "invlid id")
    })
})