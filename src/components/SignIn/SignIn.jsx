import React, {Component} from 'react'
import {connect} from 'react-redux'

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
import {googleSignInStart} from "../../store/User/UserActions";

import {SignInContainer, SignInTitle, SignInButtonContainer} from "./SignInStyles";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({email: '', password: ''})

        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render () {
        const {googleSignInStart} = this.props

        return (
            <SignInContainer>
                <SignInTitle>I already have a account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name='email'
                        value={this.state.email}
                        required
                        label='Email'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.password}
                        required
                        label='Password'
                        handleChange={this.handleChange}
                    />

                    <SignInButtonContainer>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                    </SignInButtonContainer>

                </form>
            </SignInContainer>
        )
    }

}

const mapDispathToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispathToProps)(SignIn)
