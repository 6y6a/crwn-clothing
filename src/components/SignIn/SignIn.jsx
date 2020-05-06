import React, {useState} from 'react'
import {connect} from 'react-redux'

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {googleSignInStart, emailSignInStart} from "../../store/User/UserActions";

import {SignInContainer, SignInTitle, SignInButtonContainer} from "./SignInStyles";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = userCredentials

        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const {value, name} = event.target

        setCredentials({...userCredentials, [name]: value})
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have a account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name='email'
                    value={email}
                    required
                    label='Email'
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name='password'
                    value={password}
                    required
                    label='Password'
                    handleChange={handleChange}
                />

                <SignInButtonContainer>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn={true}>Sign in with
                        Google</CustomButton>
                </SignInButtonContainer>

            </form>
        </SignInContainer>
    )
}

const mapDispathToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispathToProps)(SignIn)
