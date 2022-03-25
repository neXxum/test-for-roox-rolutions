import React from 'react'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form'
import style from './FormControl.module.scss'
import {FieldValidatorType} from '../../../utils/utils'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType>
    = ({children}) => {


    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    const hasError = meta.touched && meta.error

    return (
        <FormControl {...props}>
            <input {...input} {...restProps} className={style.input + ' ' + (hasError ? style.error : "")}/>
        </FormControl>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         disabled: boolean,
                                                         props = {}, text = ""
) {
    return (
        <div>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   disabled={disabled}
                   {...props}/> {text}
        </div>
    )
}