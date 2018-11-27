import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
class form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    const { username, password } = this.state;
    const creds = {
      username: username,
      password: password
    };

    this.props.dispatch(registerUser(creds));
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
          value={this.state.username}
          id="username-input"
        />
        <input
          type="text"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
          value={this.state.password}
          id="password-input"
        />

        <button onClick={this.handleClick}>submit</button>
      </React.Fragment>
    );
  }
}
export default connect()(form);
