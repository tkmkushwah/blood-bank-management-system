
import React from 'react'
import LoginHead from '../components/LoginHead'
import usernameIcon from '../assets/akar-icons_person.svg'
import passwordIcon from '../assets/carbon_password.svg'
const LoginScreen = () => {
  return (
    <form >
      <div>
        <h3>Login</h3>
        <LoginHead />
        <img src={usernameIcon} alt="hello this is image" />
        <input
         
          type="email"
          id="user-name"       
          name="user-name"
          autoComplete="on"
          placeholder="Username or E-mail"
        ></input>
      </div>
       <img  src={passwordIcon} alt="Password icon"></img>
      <div>
        <img htmlFor="user-password" alt ="hello is img2"></img>
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