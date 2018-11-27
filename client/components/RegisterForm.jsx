import React from 'react'
import { connect } from 'react-redux'

import { registerUser, registerError } from '../actions/register'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)

        // initial state.  These will hold form field values until submit
        this.state = {
            username: '',
            password: '',
            confirm: ''
        }

        // register functions

        // handleChange of input forms

        // handleSubmit of form
    }

    handleChange = (e) => {
        this.setState({
            ...this.state, // copy of all local state
            [e.target.name]: e.target.value // override the specific state
        })
    }

    handleSubmit = (e) => {
        // get state, dispatch it to the reducers with thunk action to submit
        console.log("RegisterForm handleSubmit state: ", this.state)
        const { username, password, confirm } = this.state

        // check if pwds match
        if(password !== confirm) {
            this.props.registerError('Passwords do not match!!!')
            return
        }

        // construct creds
        const creds = {
            username: username.trim(),
            password: password.trim()
        }

        console.log("RegisterForm handlesubmit creds: ", creds)
        // submit login registerUser is a THUNK ACTION function in the actions file
        //  and will do work and call STANDARD ACTIONS 
        this.props.registerUser(creds) // this via Redux Store as THUNK ACTIONS
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="form-wrapper register">
            <p>User info: {this.props.auth.isAuthenticated.toString()}</p> 
            <form name="register-form" onSubmit={this.handleSubmit} className="register">
                <fieldset>
                    <legend>Create a username and password</legend>
                    <p><label>username:<input type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username} /></label></p>
                    <p><label>password: <input type="password" name="password" autoComplete="" onChange={this.handleChange} value={this.state.password} /></label></p>
                    <p><label>confirm: <input type="password" name="confirm" autoComplete="" onChange={this.handleChange} value={this.state.confirm} /></label></p>
                </fieldset>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (creds) => {
            return dispatch(registerUser(creds))
        },
        registerError: (message) => {
            return dispatch(registerError(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
