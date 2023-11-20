export interface Field {
    value: string
    required: boolean
    isValid: boolean
    regex: string
    error: string
    validated: boolean
}
export interface FormFields {
    name: Field
    teamName: Field
    whatsApp: Field
}
export interface FormState {
    fields: FormFields
}