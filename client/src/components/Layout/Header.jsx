import React from 'react'
import {MdBloodtype} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import icon from '../../assets/logo.jpg'
const Header = () => {
    const isAuthenticated=false
  return (
    <nav>
         <motion.div>
         <MdBloodtype />
         <img src={icon} alt="mainIcon" />
        </motion.div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/eligibility'>Eligibility</Link>
            <Link to='/contact'>Contact</Link>
            {/* <Link to='/gallery'>Gallery</Link> */}
            <Link to={isAuthenticated? '/me':'login'}>{isAuthenticated?<FaUser/>:<FiLogIn/>}</Link>
        </div>
    </nav>

  )
}

export default Header