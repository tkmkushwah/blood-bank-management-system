import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/aboutbg.jpg";
import Layout from "../Layout/Layout";
const About = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>LEARN</h1>
        <div className="container">
          <div className="logo">
            <img style={{width:"300px",height:"370px"}} src={img1} alt="dh" />
          </div>

          <div className="about">
            <h1>Learn About Blood Donation</h1>
            <p>
              If you want to learn more about blood types and the blood donation
              <br />
              process, you’ve come to the right place. Explore these sections to
              <br />
              see the impact of blood donations, discover fun and interesting
              <br />
              facts about blood types, and learn how India is involved in
              <br />
              blood donation research.
              <br />
            </p>
            <div className="list">
              <h3>
                <b>Know More</b>
              </h3>

              <h4>
                <NavLink to="/bloodtypes" className="nav-link">
                  Blood Types
                </NavLink>
              </h4>

              <h4>
                <NavLink to="/eligibility" className="nav-link">
                  Eligibility
                </NavLink>
              </h4>

              <h4>
                <NavLink to="/impact" className="nav-link">
                  Impact
                </NavLink>
              </h4>

              <h4>
                <NavLink to="/research" className="nav-link">
                  Research
                </NavLink>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
