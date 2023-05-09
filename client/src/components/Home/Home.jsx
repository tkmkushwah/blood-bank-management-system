import React from "react";
import AboutHome from "./AboutHome";
import Layout from "../Layout/Layout";
import { NavLink } from "react-router-dom";
import GalleryHome from "./GalleryHome";
import ContactHome from "./ContactHome";
import eligibilityIcon from "../../assets/eligible-icon.png";
import '../../styles/app.scss'

const Home = () => {
  return (
    <Layout>
      <div className="Home" style={{ padding: "0%" }}>
        {/* <h1 style={{ paddingTop: "10px" }}>Blood Donation</h1> */}

        <marquee style={{ color: "white" }}>
          This project is under development
        </marquee>
        {/* <p>we are here to provide you best facilities</p> */}
<div className="container">
   <div className="eligibility-btn-ctnr" style={{ padding: "0%" }}>
          <NavLink to="/eligibility">
            <img src={eligibilityIcon} alt="icon" />
          </NavLink>

          <button>
            <NavLink to="/bloodbanklogin">Are you BloodBank?</NavLink>
          </button>
        </div>

        <div className="login-btn-cntr" style={{ padding: "0%"}}>
          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
          <button>
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
</div>
     
      </div>
      <AboutHome />
      <GalleryHome />
      <ContactHome />
      {/* <HomeCarousel /> */}
    </Layout>
  );
};

export default Home;
