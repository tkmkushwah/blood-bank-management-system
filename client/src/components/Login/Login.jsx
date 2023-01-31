import React from 'react'
import {BiDonateBlood} from 'react-icons/bi'
import {MdOutlineBloodtype} from 'react-icons/md'
import {Link,useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
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
  <div className="register">
    <p>not a user ? create new account</p>
    <button onClick={() => navigate('/register')}>Register</button>
  </div>

  </div>
</section>
    
  )
}

export default Login