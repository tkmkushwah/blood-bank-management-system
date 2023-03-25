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
              
              facts about blood types, and learn how Vitalant is involved in
              <br />
              blood donation research.
              <br />
            </p>
            <select className="learnWhy">
              <option className="learnWhy1">
                <h4>Know More</h4>
              </option>
              <option className="learnWhy1">
                <NavLink to="/Impact">
                  <h4>Impact of Blood Donation</h4>
                </NavLink>
              </option>
              <option className="learnWhy1">
                <NavLink to="/about/Eligibility">
                  <h4>Eligibility</h4>
                </NavLink>
              </option>
              <option className="learnWhy1">
                <NavLink to="/BloodTypes">
                  <h4>Blood Types</h4>
                </NavLink>
              </option>
              <option className="learnWhy1">
                <NavLink to="/">
                  <h4>Blood Donation Process</h4>
                </NavLink>
              </option>
              <option className="learnWhy1">
                <NavLink to="/Research">
                  <h4>Blood Donation Research</h4>
                </NavLink>
              </option>
            </select>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
