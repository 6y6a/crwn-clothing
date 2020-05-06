import React, {useState} from "react";
import {connect} from 'react-redux'

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import {signUpStart} from "../../store/User/UserActions";

import {SignUpContainer, SignUpTitle} from "./SignUpStyles";

const SignUp = ({signUpStart}) => {
    const [credentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = credentials

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Password dont match')
            return
        }

        signUpStart({displayName, email, password})
    }

    const handleChange = event => {
        const {name, value} = event.target

        setCredentials({...credentials, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I dont have a account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm password'
                    required
                />

                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp)
