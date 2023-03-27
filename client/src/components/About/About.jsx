import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/b_donor_reg.png";
import Layout from "../Layout/Layout";
const About = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>LEARN</h1>
        <div className="container">
          <div className="logo">
            <img src={img1} alt="dh" />
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
              facts about blood types, and learn how our website is involved in
              <br />
              blood donation research.
              <br />
            </p>

            <h3   className="deco">Know More</h3>
            <NavLink to="/Impact"  className="deco">
              <h4>Impact of Blood Donation</h4>
            </NavLink>
            <NavLink to="/Eligibility"  className="deco">
              <h4>Eligibility</h4>
            </NavLink>
            <NavLink to="/BloodTypes"  className="deco">
              <h4>Blood Types</h4>
            </NavLink>
            <NavLink to="/Research"  className="deco">
              <h4>Blood Donation Research</h4>
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
