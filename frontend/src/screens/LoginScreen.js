
import React from 'react'
import LoginHead from '../components/LoginHead'
const LoginScreen = () => {
  return (
    <form >
      <div>
        <h3>Login</h3>
        <LoginHead />
        <input
          type="email"
          id="user-name"
          name="user-name"
          autoComplete="on"
          placeholder="Username or E-mail"
        ></input>
      </div>

      <div>
        <img htmlFor="user-password"></img>
        <input
          type="password"
          id="user-password"
          name="user-password"
          autoComplete="off"
          placeholder="Password">
          </input>
      </div>

      <button>Login</button>
    </form>
  )
}

export default LoginScreen