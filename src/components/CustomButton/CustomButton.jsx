import React from "react";

import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...props}) => (
    <button className={`
        ${inverted ? 'inverted' : ''} custom-button\`} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
    >
        {children}
    </button>
)

export default CustomButton
