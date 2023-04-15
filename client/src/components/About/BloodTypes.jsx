import React from "react";
import img1 from "../../assets/b_donor_reg.png";
import Layout from "../Layout/Layout";
const BloodTypes = () => {
  return (
    <Layout>
      <section className="blood-types">
        <h1>Blood and Blood Types</h1>

        <div className="container">
          {/* <div className="logo">
            <img src={img1} alt="dh" />
          </div> */}

          <div className="about">
            <b>
              Every person needs a healthy supply of blood. But, not every
              person’s blood is exactly the same.
            </b>
            <br />
            <p>
              Human blood falls into four different blood groups: A, B, AB and
              O. Your blood also has what is known as an Rh factor: It either
              contains a certain protein or it doesn’t. (This is the positive
              [+] or negative [-] after your blood type.) The possible
              combinations create eight different blood types: A+, A-, B+, B-,
              AB+, AB-, O+ and O-. You don’t need to know your blood type to
              donate blood. Donating blood is a great way to find out your blood
              type - we’ll tell you after you donate. And, whatever your type,
              every donor is needed and every donation transforms
              lives—including your own!
            </p>
            
              <h5>Why Matching Blood Types is Important ?</h5>
           
            <p>
              Blood circulates through our bodies carrying nutrients, oxygen,
              antibodies and other necessities of life to every cell and tissue.
              Blood also removes waste from our cells and has a major role in
              the body’s defense against infection. When a patient needs blood,
              the blood donor and recipient must have compatible blood types to
              ensure a safe, successful transfusion. That’s why each blood type
              can be transfused only into people with certain other blood types.
              O-negative is the universal red cell donor, which means O-negative
              whole blood can be transfused into all blood types. O-negative is
              the most in-demand blood type because it can be used in emergency
              and other situations where the patient’s blood type is unknown.
              Read more about the special qualities of type O blood. AB-negative
              and AB-positive are the universal plasma donors, meaning their
              plasma can be given to patients with any blood type.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BloodTypes;
