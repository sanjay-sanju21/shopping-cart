import React, { Component } from 'react'
import './Login.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { userLogin } from '../Actions/Action';
export class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogin: false,
      username: '',
      password: ''
    }

  }

  handleChange = (event) => {
    if (event.target) {
      if (event.target.name === "uname") {
        this.setState({ username: event.target.value })
      }
      else if (event.target.name === "psw") {
        this.setState({ password: event.target.value })
      }

    }
  }
  onLoginHandler() {
    loginEventDispatcher();

  }

  render(props) {
    console.log(props)
    if (this.props.isLogin) {
      return <Redirect to="/home" />
    }
    return (
      <div className="main-container">
        <h2 className='scart-lable' >sCart</h2>
        <div className="input-container">
          <input className="input-field" type="text" placeholder="username" name="uname"
            value={this.state.username} onChange={this.handleChange}></input>
        </div>
        <div className="input-container">
          <input className="input-field" type="text" placeholder="password" name="psw"
            value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className="input-container">
          <button className="input-btn" type="button"
            onClick={() => this.props.onLoginHandler(this.state.username)}>Login</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.isLogin) {
  }
  return state
}

const loginEventDispatcher = (dispatch) => {
  return {
    onLoginHandler: (name) => { dispatch((userLogin(name))) }
  }
}

export default connect(mapStateToProps, loginEventDispatcher)(Login)
