import React from 'react'
import { connect } from 'react-redux'

import DisplayNewPost from './DisplayNewPost'

const NewPostList = ({ newPosts }) => (
  <div>
    {newPosts.map((post, i) =>
      <DisplayNewPost
        key={i}
        title={post.title}
        body={post.body}


      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    newPosts: state.newPosts
  }
}

export default connect(
  mapStateToProps
)(NewPostList)
