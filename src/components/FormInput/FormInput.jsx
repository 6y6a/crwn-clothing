import React from 'react'

import {Input, Label, GroupInput} from "./FormInputStyles";

const FormInput = ({handleChange, label, ...props}) => (
    <GroupInput>
        <Input onChange={handleChange} {...props}/>
        { label ?
            (<Label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </Label>)
            : null
        }
    </GroupInput>
)

export default FormInput
