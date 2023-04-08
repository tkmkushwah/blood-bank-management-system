import React from 'react'
import Layout from '../Layout/Layout'

const Eligibility = () => {
  return (
    <Layout>
      <section className="eligibility">
        <div className="container">
          <h2>Basic Requirements by Donation Type</h2>
          <div className="container2">
            <div>
              <h3>Whole Blood Donation</h3>
              <ul>
              <li>Donation frequency: Every 56 days, up to 6 times a year</li>
              <li>You must be in good health and feeling well</li>
              <li>You must be at least 16 years old in most states</li>
              <li>You must weigh at least 110 lbs</li>
              </ul>
            </div>
            <div>
              <h3>Power Red Donation</h3>
              <ul>
                <li>Donation frequency: Every 112 days, upto 3 times/year</li>
                <li>You must be in good health and feeling well</li>
                <li><b>Male donors</b> must be at least 17 years old in most states, at least 5'11' tall and weight at least 130 lbs.</li>
                <li><b>Female donors</b> must be at least 19 years old, at least 5'5" tall and weigh at least 150 lbs</li>
              </ul>
            </div>
            <div>
              <h3>Platelet Donation</h3>
              <ul>
                <li>Donation frequency: Every 7 days, upto 24 times/year</li>
                <li>You must be in good health and feelinf well</li>
                <li>You must be at least 17 years old in most states</li>
                <li>You must weigh at least 110 lbs</li>
              </ul>
            </div>
            <div>
              <h3>AB Elite Plasma Donation</h3>
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