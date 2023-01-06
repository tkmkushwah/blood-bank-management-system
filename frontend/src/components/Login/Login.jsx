import React from 'react'
import {BiDonateBlood} from 'react-icons/bi'
import {MdOutlineBloodtype} from 'react-icons/md'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    
<section className="login">
  <div className="container">
  <h2>Choose Account type</h2>
  <div className="donRec" >
    
    <div className="donor">
      <Link to='/donor-login'><MdOutlineBloodtype/></Link>
      <h3>Donor</h3>
    </div>
    <div className="donor">
      <Link to='/patient-login'><BiDonateBlood/> </Link>
      <h3>patient</h3>
    </div>
  </div>

  </div>
</section>
    
  )
}

export default Login