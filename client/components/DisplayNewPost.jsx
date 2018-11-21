import React from 'react'

const DisplayNewPost = (props) => (
  <React.Fragment>
    <div>{props.title}</div>
    <p>{props.body}</p>

  </React.Fragment>
)

export default DisplayNewPost