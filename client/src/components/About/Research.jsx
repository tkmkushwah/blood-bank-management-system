import React from "react";
import img1 from "../../assets/b_donor_reg.png";
import Layout from "../Layout/Layout";
const Research = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>Research</h1>
        <div className="container">
          <div className="logo">
            <img src={img1} alt="dh" />
          </div>
          <div className="about">
            <br />
            <p>
              With donor and patient safety always as our top priority, Indian
              <br />
              research Institutes leads the way in understanding new threats to
              <br />
              blood safety and helping to find practical applications of new
              <br />
              knowledge in transfusion biology. Established nearly 60 years ago,
              <br />
              our world-renowned Research Institute engages in studies related
              <br />
              to blood safety and efficacy with particular expertise in
              <br />
              epidemiology, public health policy, molecular biology, immunology,
              <br />
              virology, cell processing and cell therapy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
