import { RECEIVE_NEW_POSTS } from '../actions'

function newPosts(state = [], action) {
  // console.log("newposts action:", action)
  switch (action.type) {
    case RECEIVE_NEW_POSTS:
      console.log("reducer: ", action.posts)
      return action.posts

    default:
      return state
  }
}

export default newPosts
