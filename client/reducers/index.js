import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import newPosts from './newPosts'
import auth from './auth'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  newPosts,
  auth
})
