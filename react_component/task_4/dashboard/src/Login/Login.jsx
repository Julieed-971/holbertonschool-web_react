import React from 'react'
import './Login.css'
import withLogging from '../HOC/WithLogging'

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form action="">
            <label htmlFor="email">
              Email:
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" id="password" />
            </label>
            <button className="label-button" type="submit">OK</button>
          </form>
        </div>
      </>
    )
  }
}
const LoginWithLogging = withLogging(Login)
export default LoginWithLogging
