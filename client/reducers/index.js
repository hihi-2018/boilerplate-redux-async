import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import newPosts from './newPosts'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  newPosts
})
