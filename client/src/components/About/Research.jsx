import React from "react";
// import img1 from "../../assets/b_donor_reg.png";
import "../../styles/impact.scss";
import Layout from "../Layout/Layout";
const Research = () => {
  return (
    <Layout>
      <section className="impact">
        <h1>Research</h1>
        <div className="container">
          <div className="about">
            <br />
            <p>
              <ul>
                <li>Blood donation is crucial for ensuring a safe and sufficient blood supply in India.</li>
                <li>The country faces a shortage of blood due to various factors, including inadequate infrastructure, lack of awareness, and a shortage of trained medical personnel.</li>
                <li>Cultural and religious beliefs can also prevent individuals from donating blood.</li>
                <li>Efforts are being made to address these issues, including campaigns to increase awareness about the importance of blood donation and initiatives to encourage voluntary donation.</li>
                <li>Transfusion-transmissible infections (TTIs) in donated blood are prevalent in India, with HIV, hepatitis B and C, and syphilis being the most common.</li>
                <li>Measures have been taken to screen donated blood for TTIs, including the use of nucleic acid testing (NAT)</li>
                <li>More needs to be done to address the shortage of blood and ensure a sufficient supply of safe blood for those in need.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
