import React from 'react'
import AboutHome from './AboutHome'
// import { useAuth } from "../../context/auth.js";
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import GalleryHome from './GalleryHome';
import ContactHome from "./ContactHome";
import eligibilityIcon from '../../assets/eligible-icon.png'

const Home = () => {
    // const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <section className="home">
        <div>
          <h1 style={{ paddingTop: "20px" }}>Blood Donation</h1>
          <marquee>This project is under development</marquee>
          {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
          <p>we are here to provide you best facility</p>
          <br />
          <div>
            <NavLink to="/eligibility">
              <img src={eligibilityIcon} alt="icon" />
            </NavLink>
            <button>
              <NavLink to="/eligibility">Are you eligible?</NavLink>
            </button>
          </div>
          <div
            className="button-container"
            style={{ display: "flex", marginTop: "50px" }}
          >
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
            <button>
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
        </div>
      </section>
      <AboutHome />
      <GalleryHome />
      <ContactHome />
      {/* <HomeCarousel /> */}
    </Layout>
  );
}

export default Home