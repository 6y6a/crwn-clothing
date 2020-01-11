import React, {Component} from "react";
import {connect} from 'react-redux'

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import {signUpStart} from "../../store/User/UserActions";

import {SignUpContainer, SignUpTitle} from "./SignUpStyles";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault()

        const {signUpStart} = this.props
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert('Password dont match')
            return
        }

        signUpStart({displayName, email, password})
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render () {
        const {displayName, email, password, confirmPassword} = this.state

        return (
            <SignUpContainer>
                <SignUpTitle>I dont have a account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm password'
                        required
                    />

                    <CustomButton type='submit' >Sign up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp)
