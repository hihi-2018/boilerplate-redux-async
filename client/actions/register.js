import request from 'superagent'
import { saveUserToken } from '../utils/auth'
import { receiveLogin } from './login'
export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const REGISTER_ERROR = 'REGISTER_ERROR'
// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'  // this handled in login actions

// SIMPLE ACTIONS (actually, action creators, as they return an action for the caller to dispatch to Redux Store)

export const requestRegisterAction = (creds) => {
    return {
        type: REQUEST_REGISTER,
        // isFetching: true,
        // isAuthenticated: false,
        creds // what reducers use this?
    }
}

export const registerErrorAction = (errorMessage) => {
    return {
        type: REGISTER_ERROR,
        errorMessage: errorMessage
    }
}



// THUNKS - DO SOME WORK AND GET BACK TO ME, and CALL SIMPLE ACTIONS AS NEEDED

export function registerUser(creds) {
    console.log("register action registerUser creds ", creds)
    return dispatch => {
        // use dispatch to dispatch actions to redux reducers
        dispatch(requestRegisterAction(creds)) // creds needed? 
        return request
            .post('/api/v1/auth/register')
            .send(creds)
            .then(response => {
                // check response
                if(response.ok) {
                    const userInfo = saveUserToken(response.body.token)
                    dispatch(receiveLogin(userInfo))
                }
                else {
                    dispatch(registerErrorAction(response.body.message))
                    // return Promise.reject(response.body.message)
                }
            })
    }
}



// export function fetchPosts(subreddit) {
//     return(dispatch) => {
//         dispatch(requestPosts()) // tells the waiting spinner to be true
//         return request
//             .get(`/api/v1/reddit/subreddit/${subreddit}`)
//             .then(res => {
//                 dispatch(receivePosts(res.body))
//             })
//             .catch(err => {
//                 console.log("error", err)
//                 dispatch(showError(err.message))
//             })
//     }
// }

// export function fetchNewPosts(userId) {
//     return(dispatch) => {
//         dispatch(requestNewPosts())
//         return request
//             .get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 return res.body
//             })

//             .then(posts => {
//                 // return posts
//                 return posts.filter(post => post.userId == userId)
//             })
//             .then(filteredPosts => {
//                 // console.log("userID:", userId)
//                 // console.log("fetch posts action index:", filteredPosts)
//                 dispatch(receiveNewPosts(filteredPosts))
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch(showError(err.message))
//             })
//     }
// }
