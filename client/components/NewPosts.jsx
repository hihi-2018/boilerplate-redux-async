import React from 'react'
import { connect } from 'react-redux'
import { fetchNewPosts } from '../actions'

class NewPosts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: ''

    }
  }

  render() {
    return (
      <React.Fragment>
        <input type='text' onChange={(e) => { this.setState({ userId: e.target.value }) }} value={this.state.userId} id="userID-input"></input>



        <button onClick={() => this.props.dispatch(fetchNewPosts(this.state.userId))}>
          Fetch new Posts
    </button>
      </React.Fragment>
    )

  }
}


export default connect()(NewPosts)