import { REQUEST_REGISTER, REGISTER_ERROR } from '../actions/register' // constants for our strings

import { LOGIN_SUCCESS } from '../actions/login'

import { isAuthenticated, getUserTokenInfo } from '../utils/auth'

const initialState = {
    isFetching: false,
    isAuthenticated: isAuthenticated(),
    user: getUserTokenInfo(),
    errorMessage: ''
}


// if not switch statements for a change :-)
function auth(state = initialState, action) {

    console.log("Auth reducer auth state: ", state)
    console.log("Auth reducer auth action: ", action)

    if(action.type == REQUEST_REGISTER) {
        return {
            ...state,
            isFetching: true,
            isAuthenticated: false,
            errorMessage: ''
        }
    }

    if(action.type == LOGIN_SUCCESS) {
        return {
            ...state,
            isFetching: false,
            isAuthenticated: true,
            errorMessage: '',
            user: action.user
        }
    }

    if(action.type == REGISTER_ERROR) {
        return {
            ...state,
            isFetching: false,
            isAuthenticated: false,
            errorMessage: action.errorMessage
        }
    }
    return state
}

export default auth
