import React from 'react'
import {BiDonateBlood} from 'react-icons/bi'
const PatientLogin = () => {
  return (
     <section className="login">
  <div className="container">
  <h2>patient login</h2>
  <div className="donRec" >
    
    <div className="patient">
      <BiDonateBlood/>
      <h3>Patient</h3>
    </div>

  </div>
  <p>hello please <br />fill out this form to get started </p>
    <form action="">
     
      <input type="text" name="username" id="username" placeholder='username' /><br />
     
      <input type="password" name="password" placeholder='password' />
      <button>Login</button>
      
    </form>
    
 </div>
</section>
  )
}

export default PatientLogin