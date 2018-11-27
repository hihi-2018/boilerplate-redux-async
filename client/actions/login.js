import request from 'superagent'
import { saveUserToken } from '../utils/auth'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'  // this handled in login actions

// SIMPLE ACTIONS (actually, action creators, as they return an action for the caller to dispatch to Redux Store)



export const receiveLogin = (userInfo) => {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX USER INFO", userInfo)
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user: userInfo
    }
}
