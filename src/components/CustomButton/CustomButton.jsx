import React from "react";

import {CustomeButtonContainer} from "./CustomButtonStyles";

const CustomButton = ({children, ...props}) => (
    <CustomeButtonContainer {...props}>
        {children}
    </CustomeButtonContainer>
)

export default CustomButton
