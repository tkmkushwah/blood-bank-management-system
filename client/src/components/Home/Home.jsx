import React from 'react'
import HomeCarousel from './HomeCarousel'
import AboutHome from './AboutHome'
import bImg from '../../assets/b_donor_reg.png'
import { useAuth } from "../../context/auth.js";
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import GalleryHome from './GalleryHome';
import ContactHome from "./ContactHome";
const Home = () => {
    const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <section className="home">
        <div className="img">
          <img src={bImg} alt="image" />
        </div>
        <div>
          <h1>Blood Donation</h1>
          <marquee behavior="" direction="">
            This project is under development
          </marquee>
          <pre>{JSON.stringify(auth, null, 4)}</pre>
          <p>we are here to provide you best facility</p>
          <button>Know Us</button>
          <br />
          <ul className="container">
            <div className="direct">
              <li>
                <NavLink to="/Eligibility">Are you eligible?</NavLink>
              </li>
            </div>
            <div className="direct">
              <li>
                <NavLink to="/register" className="Home-Bottom">
                  Register Here
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </section>
      <AboutHome />
      <GalleryHome/>
      <ContactHome/>
      {/* <HomeCarousel /> */}
    </Layout>
  );
}

export default Home