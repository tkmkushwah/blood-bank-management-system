import React from "react";
import Layout from "../Layout/Layout";
import "../../styles/bloodtypes.scss";

const Eligibility = () => {
  return (
    <Layout>
      <section className="eligibility">
        <div className="container">
          <h2>Basic Requirements by Donation Type</h2>
          <div className="container2">
            <div className="eligibility-box">
              <h5>Whole Blood Donation</h5>
              <ul>
                <li>
                  <strong style={{ color: "green" }}>Age</strong>: Donors should
                  be between 18 to 65 years of age.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Weight</strong>: Donors
                  should weigh at least 50 kg.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Hemoglobin level</strong> :
                  Hemoglobin level should be 12.5 g/dL or above.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Health</strong> : Donors
                  should be in good health and should not have any acute or
                  chronic illnesses.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Medications</strong>:
                  Donors should not be taking any medications for chronic
                  illnesses such as diabetes, hypertension, or cancer.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Lifestyle</strong>: Donors
                  should not have engaged in high-risk behaviors such as drug
                  use, unprotected sex, or multiple sexual partners.
                </li>
                <li>
                  <strong style={{ color: "green" }}>
                    Pregnancy and breastfeeding
                  </strong>
                  : Women who are pregnant or breastfeeding should not donate
                  blood.
                </li>
              </ul>
            </div>

            <div className="eligibility-box">
              <h5>Power Red Donation</h5>
              <ul>
                <li>
                  <strong style={{ color: "green" }}>Age</strong>: Donors should
                  be between 18 to 60 years of age.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Weight</strong>: Donors
                  should weigh at least 55 kg.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Hemoglobin level</strong> :
                  Hemoglobin level should be 12.5 g/dL or above for women and
                  13.0 g/dL or above for men.
                </li>
                <li>
                  <strong style={{ color: "green" }}> Blood type</strong>:
                  Donors should have A negative, B negative, or O negative blood
                  type.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Health</strong> : Donors
                  should be in good health and should not have any acute or
                  chronic illnesses.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Medications</strong> :
                  Donors should not be taking any medications for chronic
                  illnesses such as diabetes, hypertension, or cancer.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Lifestyle</strong> : Donors
                  should not have engaged in high-risk behaviors such as drug
                  use, unprotected sex, or multiple sexual partners.
                </li>
                <li>
                  <strong style={{ color: "green" }}>
                    Pregnancy and breastfeeding
                  </strong>{" "}
                  : Women who are pregnant or breastfeeding should not donate
                  blood.
                </li>
              </ul>
            </div>

            <div className="eligibility-box">
              <h5>Platelet Donation</h5>
              <ul>
                <li>
                  <strong style={{ color: "green" }}>Age</strong>: Donors should
                  be between 18 to 65 years of age.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Weight</strong>: Donors
                  should weigh at least 55 kg.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Hemoglobin level</strong>:
                  Hemoglobin level should be 12.5 g/dL or above for women and
                  13.0 g/dL or above for men.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Blood type</strong> :
                  Donors should have A positive, A negative, B positive, B
                  negative, AB positive, or O positive blood type.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Health</strong> : Donors
                  should be in good health and should not have any acute or
                  chronic illnesses.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Medications</strong>:
                  Donors should not be taking any medications for chronic
                  illnesses such as diabetes, hypertension, or cancer.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Lifestyle</strong>: Donors
                  should not have engaged in high-risk behaviors such as drug
                  use, unprotected sex, or multiple sexual partners.
                </li>
                <li>
                  <strong style={{ color: "green" }}>Platelet count</strong> :
                  Donors should have a platelet count of 1.5 lakh per microliter
                  or above.
                </li>
              </ul>
            </div>

            {/* <div className="eligibility-box">
              <h5>AB Elite Plasma Donation</h5>
              <ul>
                <li>Age: Donors should be between 18 to 65 years of age.</li>
                <li>Weight: Donors should weigh at least 50 kg.</li>
                <li>Hemoglobin level: Hemoglobin level should be 12.5 g/dL or above for women and 13.0 g/dL or above for men.</li> 
                <li>Blood type: Donors should have AB positive or AB negative blood type. Health: Donors should be in good health and should not have any acute or chronic illnesses.</li> 
                <li>Medications: Donors should not be taking any medications for chronic illnesses such as diabetes, hypertension, or cancer.</li>
                <li>Lifestyle: Donors should not have engaged in high-risk behaviors such as drug use, unprotected sex, or multiple sexual partners.</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <br />
      {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
    </Layout>
  );
};

export default Eligibility;
