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
            ...this.state, // copy of local state
            [e.target.name]: e.target.value // override the specific state
        })
    }

    handleSubmit(e) {
        // get state, dispatch it to the reducers with thunk action to submit 
        // to register api

    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="form-wrapper register">
            <form name="register-form" onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <input type="password" name="confirm" onChange={this.handleChange} value={this.state.confirm} />
            </form>
            </div>
        )
    }

    // mapStateToProps (state) {

    // }

    mapDispatchToProps(dispatch) {
        return {
            registerUser: (creds) => {
                return dispatch(registerUser(creds))
            },
            registerError: (message) => {
                return dispatch(registerError(message))
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm)
