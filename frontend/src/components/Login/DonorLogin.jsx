import React from 'react'
import {MdOutlineBloodtype} from 'react-icons/md'
const DonorLogin = () => {
  return (
  <section className="login">
  <div className="container">
  <h2>donor login</h2>
  <div className="donRec" >
    
    <div className="donor">
      <MdOutlineBloodtype/>
      <h3>Donor</h3>
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

export default DonorLogin