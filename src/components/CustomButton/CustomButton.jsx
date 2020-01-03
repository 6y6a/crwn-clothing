import React from "react";

import './CustomButton.scss'

const CustomButton = ({children, ...props}) => (
    <button className='custom-button' {...props}>{children}</button>
)

export default CustomButton
