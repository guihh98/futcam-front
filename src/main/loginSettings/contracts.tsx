export interface Field {
    value: string
    required: boolean
    isValid: boolean
    regex: string
    error: string
    validated: boolean
}
export interface FormFields {
    login: Field
    password: Field
}
export interface FormState {
    fields: FormFields
}