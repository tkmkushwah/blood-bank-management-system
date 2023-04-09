import React from 'react'

import {MdBloodtype} from 'react-icons/md'
import {motion} from 'framer-motion'

import { Link, NavLink } from "react-router-dom";
import icon from '../../assets/logo.png'

import toast from "react-hot-toast";
import {useAuth} from '../../context/auth.js'

import '../../styles/header.scss'
const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    })
    localStorage.removeItem("auth");
    toast.success("Logout successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <motion.div>
                {/* < MdBloodtype /> */}
                <img
                  src={icon}
                  style={{
                    height: "70px",
                    marginLeft: "30px",
                    borderRadius:'50%',
             boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                  }}
                  alt="mainIcon"
                />
              </motion.div>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link ">
                  Contact
                </NavLink>
              </li>
             <li>
             <NavLink to={`/${localStorage.getItem("userType").toLowerCase()}/dashboard`} className="nav-link ">
                Dashboard
                </NavLink>
             </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header