import React from 'react'

const Post = (props) => (
  <React.Fragment>
    <div>{props.title}</div>
    <p>{props.date}</p>
    <p>{props.summary} </p>
  </React.Fragment>
)

export default Post
