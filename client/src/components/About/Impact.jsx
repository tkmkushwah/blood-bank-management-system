import React from "react";
import img1 from "../../assets/b_donor_reg.png";
import Layout from "../Layout/Layout";
const Impact = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>Impact of Blood Donation</h1>
        <div className="container">
          <div className="logo">
            <img src={img1} alt="dh" />
          </div>
          <div className="about">
            <b>Your role in the world matters.</b>
            <br />
            <p>
              When you give blood with our bloodbank, you have the potential to help
              <br />
              hospital patients within your community and, when the need arises,
              <br />
              others across the country. When extreme weather and unforeseen
              <br />
              tragedies occur, our experienced nationwide team members jump into
              <br />
              action to quickly deliver blood where it’s needed most. The
              benefits
              <br />
              of our larger footprint are vast, including leveraging our
              <br />
              coast-to-coast network of donation centers so every donation has
              the
              <br />
              potential to impact more lives. Many people believe that most
              blood
              <br />
              is needed after major disasters. However, daily personal
              emergencies
              <br />
              and ongoing medical needs of thousands of patients require a<br />
              constant and ready blood supply. It’s the blood already on
              hospital
              <br />
              shelves that saves lives. Every day in the INDIA, patients in
              <br />
              hospitals, surgical centers and emergency treatment facilities
              need blood and its components.
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
