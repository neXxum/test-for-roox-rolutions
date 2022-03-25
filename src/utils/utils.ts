export type FieldValidatorType = (value: string) => boolean

export const required: FieldValidatorType = value => {
    if (value) return false
    return true
}