import React, {Component} from 'react'

import './SignIn.scss'

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
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

                    <CustomButton type="submit" >Sign in</CustomButton>

                </form>
            </div>
        )
    }

}

export default SignIn