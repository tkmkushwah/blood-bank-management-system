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
              <ul>
                <li>
                  Human blood can be categorized into four blood groups: A, B,
                  AB, and O.
                </li>
                <li>
                  The blood also has an Rh factor which can be positive (+) or
                  negative (-).
                </li>
                <li>
                  The combination of blood group and Rh factor creates eight
                  blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-.
                </li>
                <li>
                  Donating blood is a way to find out one's blood type, and
                  every donor is needed.
                </li>
              </ul>
            </p>

            <h5>Why Matching Blood Types is Important ?</h5>

            <p>
              <li>
                Blood is responsible for transporting nutrients, oxygen,
                antibodies, and other necessities of life to every cell and
                tissue in the body.
              </li>
              <li>
                Blood also plays a crucial role in removing waste from our cells
                and defending the body against infections.
              </li>
              <li>
                For a successful blood transfusion, the donor's and recipient's
                blood types must be compatible.
              </li>
              <li>
                O-negative is the universal red cell donor, meaning it can be
                transfused into all blood types and is in high demand for
                emergency situations. AB-negative and AB-positive are the universal plasma donors,
                meaning their plasma can be given to patients with any blood
                type.
              </li>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BloodTypes;
