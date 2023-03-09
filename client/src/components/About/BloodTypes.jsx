import React from "react";
import img1 from "../../assets/b_donor_reg.png";
import Layout from "../Layout/Layout";
const BloodTypes = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>Blood and Blood Types</h1>
        <div className="container">
          <div className="logo">
            <img src={img1} alt="dh" />
          </div>
          <div className="about">
            <b>
              Every person needs a healthy supply of blood. But, not every
              <br />
              person’s blood is exactly the same.
            </b>
            <br />
            <p>
              Human blood falls into four different blood groups: A, B, AB and
              <br />
              O. Your blood also has what is known as an Rh factor: It either
              <br />
              contains a certain protein or it doesn’t. (This is the positive
              <br />
              [+] or negative [-] after your blood type.) The possible
              <br />
              combinations create eight different blood types: A+, A-, B+, B-,
              <br />
              AB+, AB-, O+ and O-. <br />
              <br />
              You don’t need to know your blood type to
              <br />
              donate blood. Donating blood is a great way to find out your blood
              <br />
              type - we’ll tell you after you donate. And, whatever your type,
              <br />
              every donor is needed and every donation transforms
              <br />
              lives—including your own!
              <br />
            </p>
            <h4>Why Matching Blood Types is Important</h4>
            <p>
              Blood circulates through our bodies carrying nutrients, oxygen,
              <br />
              antibodies and other necessities of life to every cell and tissue.
              <br />
              Blood also removes waste from our cells and has a major role in
              <br />
              the body’s defense against infection.
              <br />
              <br />
              <br />
              When a patient needs blood, the blood donor and recipient must
              <br />
              <br />
              have compatible blood types to ensure a safe, successful
              <br />
              transfusion. That’s why each blood type can be transfused only
              <br />
              into people with certain other blood types. O-negative is the
              <br />
              universal red cell donor, which means O-negative whole blood can
              <br />
              be transfused into all blood types. <br />
              O-negative is the most in-demand blood type because it can be used
              <br />
              in emergency and other situations where the patient’s blood type
              <br />
              is unknown. Read more about the special qualities of type O blood.
              <br />
              AB-negative and AB-positive are the universal plasma donors,
              <br />
              meaning their plasma can be given to patients with any blood type.
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BloodTypes;
