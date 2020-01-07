import React from "react";

import {SignInAndSignUpContainer} from "./SignInAndSignUpStyles";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUp
