import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/b_donor_reg.png";
const AboutHome = () => {
  return (
    <section
      className="about-us"
      style={{ borderRadius: "1%", margin: "50px 0" }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>About Us</h1>

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
            facts about blood types, and learn how Inida is involved in
            <br />
            blood donation research.
            <br />
          </p>
          <ul className="list">
            <li className="listItem">
              <h3>
                <b>Know More</b>
              </h3>
            </li>
            <li className="listItem">
              <h4>
                <NavLink to="/bloodtypes">Blood Types</NavLink>
              </h4>
            </li>
            <li className="listItem">
              <h4>
                <NavLink to="/eligibility">Eligibility</NavLink>
              </h4>
            </li>
            <li className="listItem">
              <h4>
                <NavLink to="/impact">Impact</NavLink>
              </h4>
            </li>
            <li className="listItem">
              <h4>
                <NavLink to="/research">Research</NavLink>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
