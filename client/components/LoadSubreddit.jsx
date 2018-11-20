import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddit: 'newzealand'

    }
  }

  render() {
    return (
      <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
        Fetch Posts
    </button>
    )

  }
}

// const LoadSubreddit = ({ dispatch }) => (
//   <button onClick={() => dispatch(fetchPosts(this.state.subReddit))}>
//     Fetch Posts
//   </button>
// )

// const LoadSubreddit = (props) => (
//   <button onClick={() => props.dispatch(fetchPosts('newzealand'))}>
//     Fetch Posts
//   </button>
// )

export default connect()(LoadSubreddit)
