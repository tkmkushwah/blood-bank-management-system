import React from "react";
import Layout from "../Layout/Layout";
import '../../styles/impact.scss';
const Impact = () => {
  return (
    <Layout>
      <section className="impact">
        <h1>Impact of Blood Donation</h1>
        <div className="container">
          <div className="about">
            <b>Your role in the world matters.</b>
            <br />
            <p>
              <ul>
              <li>Blood donation is crucial for ensuring a safe and sufficient blood supply for medical purposes.</li>
              <li>In India, there is a high need for blood due to a large population, a high incidence of accidents, and a prevalence of diseases that require blood transfusions.</li>
              <li>Blood donation saves countless lives in India, especially in medical emergencies such as childbirth, accidents, and surgeries.</li>
              <li>Blood donation has social impacts, bringing communities together and increasing awareness about the importance of blood donation.</li>
              <li>Blood donation has economic impacts in India, reducing the burden on the healthcare system and patients and reducing the time and resources required to find suitable donors.</li>
              <li>Challenges to blood donation in India include a shortage of trained medical personnel, inadequate infrastructure, and cultural and religious beliefs that can prevent individuals from donating.</li>
              <li>Initiatives are underway to address these challenges and encourage more people to donate blood in India.</li>
              <li>Blood donation has positive impacts on the health of the donor, including a lower risk of developing cardiovascular disease and certain cancers.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
