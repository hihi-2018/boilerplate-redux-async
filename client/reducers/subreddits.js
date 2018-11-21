import { RECEIVE_POSTS } from '../actions'

function subreddits(state = [], action) {
  // console.log("action subreddit", action)
  switch (action.type) {
    case RECEIVE_POSTS:
      console.log("subreddits posts:", action.posts)
      return action.posts

    default:
      return state
  }
}

export default subreddits
