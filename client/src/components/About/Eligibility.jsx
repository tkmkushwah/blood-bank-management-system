import React from 'react'
import Layout from '../Layout/Layout'
import '../../styles/bloodtypes.scss'

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
                <li>Donation frequency: Every 56 days, up to 6 times a year</li>
                <li>You must be in good health and feeling well</li>
                <li>You must be at least 16 years old in most states</li>
                <li>You must weigh at least 110 lbs</li>
              </ul>
            </div>

            <div className="eligibility-box">
              <h5>Power Red Donation</h5>
              <ul>
                <li>Donation frequency: Every 112 days, upto 3 times/year</li>
                <li>You must be in good health and feeling well</li>
                <li>
                  <b>Male donors</b> must be at least 17 years old in most
                  states, at least 5'11' tall and weight at least 130 lbs.
                </li>
                <li>
                  <b>Female donors</b> must be at least 19 years old, at least
                  5'5" tall and weigh at least 150 lbs
                </li>
              </ul>
            </div>

            <div className="eligibility-box">
              <h5>Platelet Donation</h5>
              <ul>
                <li>Donation frequency: Every 7 days, upto 24 times/year</li>
                <li>You must be in good health and feelinf well</li>
                <li>You must be at least 17 years old in most states</li>
                <li>You must weigh at least 110 lbs</li>
              </ul>
            </div>

            <div className="eligibility-box">
              <h5>AB Elite Plasma Donation</h5>
              <ul>
                <li>Donation frequency: Every 28 days, up to 13 times/year</li>
                <li>You must have type AB blood</li>
                <li>You must be in good health and feeling well</li>
                <li>You must be at least 17 years old</li>
                <li>You must weigh at least 110 lbs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Eligibility