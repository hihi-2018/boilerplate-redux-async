import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_NEW_POSTS = 'RECEIVE_NEW_POSTS'
export const REQUEST_NEW_POSTS = 'REQUEST_NEW_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const requestNewPosts = () => {
  return {
    type: REQUEST_NEW_POSTS
  }
}

export const receiveNewPosts = (posts) => {
  return {
    type: RECEIVE_NEW_POSTS,
    posts: posts
  }
}





export const receivePosts = (posts) => {

  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)

  }
}

export const showError = (errorMessage) => {
  // console.log("error??", errorMessage)
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts()) // tells the waiting spinner to be true
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        console.log("error", err)
        dispatch(showError(err.message))
      })
  }
}

export function fetchNewPosts(userId) {
  return (dispatch) => {
    dispatch(requestNewPosts())
    return request
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        return res.body
      })

      .then(posts => {
        // return posts
        return posts.filter(post => post.userId == userId)
      })
      .then(filteredPosts => {
        // console.log("userID:", userId)
        // console.log("fetch posts action index:", filteredPosts)
        dispatch(receiveNewPosts(filteredPosts))
      })
      .catch(err => {
        console.log(err)
        dispatch(showError(err.message))
      })
  }
}